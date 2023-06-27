import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearchSubmit: (searchTerm: string) => void;
}

function SearchInput({ onSearchSubmit }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchRef.current) {
            onSearchSubmit(searchRef.current.value);
          }
        }}
      >
        <Input
          ref={searchRef}
          variant="filled"
          placeholder="Search games..."
          borderRadius={20}
        ></Input>
      </form>
    </>
  );
}

export default SearchInput;
