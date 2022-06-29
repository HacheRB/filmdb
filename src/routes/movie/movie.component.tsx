import { useParams } from 'react-router-dom'
import { useGetMovieDetailsQuery } from '../../services/moviedb'

const Movie = () => {
	const { movieId } = useParams<Record<string, string | undefined>>()
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetMovieDetailsQuery(movieId!)
	return (
		<div>
			{error && <h2>Error Message</h2>}
			{isLoading && <h2>Loading</h2>}
			{isFetching && <h2>Fetching</h2>}
			{isSuccess && (
				<div>
					<h1>{data.title}</h1>
					<h1>{data.imdb_id}</h1>
					<img
						src={`https://image.tmdb.org/t/p/w500/${data.belongs_to_collection.poster_path}`}
						alt=""
					/>
				</div>
			)}
		</div>
	)
}

export default Movie
