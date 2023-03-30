import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";
import KeywordsModal from "./components/KeywordsModal";

function App() {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make only the first letter of every word uppercase and separate with commas:\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);

    const json = await response.json();
    const data = json.choices[0].text.trim();
    console.log(data);
    setKeywords(data);
    setLoading(false);
  };
  return (
    <>
      <Box bg="linkedin" height="100vh" p={120}>
        <Container maxW="3xl" centerContent>
          <Header />
          <TextInput extractKeywords={extractKeywords} />
          <Footer />
        </Container>
        <KeywordsModal
          isOpen={isOpen}
          loading={loading}
          keywords={keywords}
          closeModal={closeModal}
        />
      </Box>
    </>
  );
}

export default App;
