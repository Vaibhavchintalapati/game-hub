import {
  List,
  ListItem,
  Text,
  Image,
  HStack,
  Spinner,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import CroppedImage from "../services/cropped-image";

interface Props {
  onGenreSelection: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresList({ onGenreSelection, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={CroppedImage(item.image_background)}
            ></Image>
            <Button
              fontWeight={item.id == selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onGenreSelection(item)}
            >
              {item.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresList;
