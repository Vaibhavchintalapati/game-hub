import { Input } from "@chakra-ui/react";

function SearchInput() {
  return (
    <>
      <Input
        variant="filled"
        placeholder="Search games..."
        borderRadius={20}
      ></Input>
    </>
  );
}

export default SearchInput;
