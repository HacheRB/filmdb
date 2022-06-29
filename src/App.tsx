import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Movie from './routes/movie/movie.component'
import Navigation from './routes/navigation/navigation.component'

function App() {
	return (
		<Suspense fallback={<h1> Loading ...</h1>}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path=":movieId" element={<Movie />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
