import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  onPlatformSelection: (platform: Platform) => void;

  gameQuery: GameQuery | null;
}

function PlatformSelector({ onPlatformSelection, gameQuery }: Props) {
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery?.platform?.name ? gameQuery?.platform?.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem onClick={() => onPlatformSelection(item)} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
