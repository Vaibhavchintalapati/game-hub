import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedGenre: Genre | null;
  onSelectedPlatform: Platform | null;
}

function GameGrid({ onSelectedGenre, onSelectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(
    onSelectedGenre,
    onSelectedPlatform
  );
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
}
export default GameGrid;
