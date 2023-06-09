import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";
const Header = () => {
  return (
    <>
      <Image src={logo} alt="Logo" width={100} marginBottom="1rem" />
      <Heading marginBottom="1rem" textAlign="center">
        AI Keywords Extractor
      </Heading>
      <Text fontSize={20} textAlign="center">
        Paste in your text below and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
