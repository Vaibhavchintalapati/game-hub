import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      {error && <Text>{error}</Text>}
    </>
  );
}
export default GameGrid;
