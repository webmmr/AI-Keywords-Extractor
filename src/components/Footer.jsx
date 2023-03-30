import logo from "../assets/openai.png";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight="10px" />
        <Text>Powereed by OpenAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
