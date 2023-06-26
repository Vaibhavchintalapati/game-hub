import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import CroppedImage from "../services/cropped-image";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card width="250px" borderRadius={10} overflow="hidden">
        <Image src={CroppedImage(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>

          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore criticScore={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
