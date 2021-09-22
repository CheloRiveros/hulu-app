import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <div>
      {results.map(movie => (
        <Thumbnail movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default Results;
