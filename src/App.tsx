import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  /* const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  ); */

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (item: Genre) => {
    setGameQuery({ ...gameQuery, genre: item });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onGenreSelection={handleGenreSelection}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onPlatformSelection={(item) =>
            setGameQuery({ ...gameQuery, platform: item })
          }
        ></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}
export default App;
