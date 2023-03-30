import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is emplty",
        description: "Please enter some text to extract the keywords",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      extractKeywords(text);
    }
  };
  return (
    <>
      <Textarea
        padding={4}
        marginTop={6}
        height={250}
        placeholder="Put your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button bg="red" color="white" margin={4} onClick={submitText}>
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
