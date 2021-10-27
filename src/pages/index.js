import React from 'react'

import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar/App'
import { Landing } from '../components/Landing/App'

const Home = () => {
	return (
		<>
			<Banner />
			<Navbar />
			<Landing />
		</>
	)
}

export default Home