import useGenres from "../hooks/useGenres";

function GenresList() {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default GenresList;
