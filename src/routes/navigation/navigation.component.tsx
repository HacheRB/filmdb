import { Outlet } from 'react-router-dom'
const Navigation = () => {
	return (
		<>
			<h1>Navigation Menu KEY:{process.env.REACT_APP_MOVIEDB_API_KEY}</h1>
			<Outlet />
		</>
	)
}

export default Navigation
