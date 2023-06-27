import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleGenreSelection = (item: Genre) => {
    setSelectedGenre(item);
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
            selectedGenre={selectedGenre}
            onGenreSelection={handleGenreSelection}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onPlatformSelection={(item) => setSelectedPlatform(item)}
        ></PlatformSelector>
        <GameGrid
          onSelectedGenre={selectedGenre}
          onSelectedPlatform={selectedPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}
export default App;
