import useGenres from "../hooks/useGenres";

function GenresList() {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default GenresList;
