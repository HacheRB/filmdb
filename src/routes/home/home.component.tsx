import { Link } from 'react-router-dom'
import { useGetTrendingQuery } from '../../services/moviedb'

const Home = () => {
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetTrendingQuery()

	return (
		<div>
			<h1>Home Menu</h1>
			{error && <h2>Error Message</h2>}
			{isLoading && <h2>Loading</h2>}
			{isFetching && <h2>Fetching</h2>}

			{isSuccess && (
				<div>
					<h1>{data.page}</h1>
					{data.results?.map((film) => (
						<div>
							<Link to={`/${film.id}`}>
								<h1>{film.title}</h1>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Home
