import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import CroppedImage from "../services/cropped-image";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card>
        <Image src={CroppedImage(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore criticScore={game.metacritic}></CriticScore>
          </HStack>

          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top}></Emoji>{" "}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
