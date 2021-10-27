import React from 'react'
import {Helmet} from 'react-helmet'
import {Grid} from 'react-styled-flexboxgrid'

import useWindowSize from '../../utils/hooks/windowSize'
import Global from './Global'
import Nav from './Navigation'

const Layout = ({children, helmet, limitGrid}) => (
	<>
		{limitGrid ? (
			<LayoutLimitGrid children={children} helmet={helmet} />
		) : (
			<LayoutDefault children={children} helmet={helmet} />
		)}
	</>
)

export default Layout

const LayoutDefault = ({children, helmet}) => {
	const size = {height: 1000}
	return <LayoutContent children={children} helmet={helmet} size={size} />
}
const LayoutLimitGrid = ({children, helmet}) => {
	const size = useWindowSize()
	return <LayoutContent children={children} helmet={helmet} size={size} />
}

export const LayoutContent = ({size, helmet, children}) => (
	<>
		<Global />
		<Helmet title={helmet} />
		<Nav />
		{size.height > 900 ? (
			<Grid>{children}</Grid>
		) : (
			<Grid style={{maxWidth: '1050px'}}>{children}</Grid>
		)}
	</>
)