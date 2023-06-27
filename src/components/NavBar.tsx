import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchSubmit: (searchTerm: string) => void;
}
function NavBar({ onSearchSubmit }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput
        onSearchSubmit={(searchTerm) => onSearchSubmit(searchTerm)}
      ></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
}
export default NavBar;
