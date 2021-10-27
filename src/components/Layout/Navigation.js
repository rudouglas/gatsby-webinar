import React from 'react'

import {Nav} from '../elements/layout'

const Navigation = () => {
	return (
		<Nav>
			<Nav.Item to="/" home>
				Morty & Rick
			</Nav.Item>
			<Nav.Item to="/characters">Characters</Nav.Item>
		</Nav>
	)
}

export default Navigation