import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import GameCardContainer from "./GameCardContainer";
function GameGrid() {
  const { games, error, isLoading } = useGames();
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer>
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard key={game.id} game={game}></GameCard>{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
}
export default GameGrid;
