import React from 'react'
import {Link as GLink} from 'gatsby'
import styled from 'styled-components'

import {FONT} from '../../../config/styles'

const Nav = ({children}) => (
	<Container>
		<List>{children}</List>
	</Container>
)

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 90px;
	margin-bottom: 28px;
	background-color: white;
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	position: absolute;
	z-index: 100;
	top: 12px;
	right: 40px;

	list-style-type: none;
	text-align: right;
	font-size: 1rem;
	line-height: 1.4rem;
	font-family: ${FONT};
	font-weight: 400;
`
const Item = ({children, ...props}) => {
	const {to, home} = props
	return (
		<Link to={to}>
			<Text home={home}>{children}</Text>
		</Link>
	)
}
const Text = styled.li`
	color: black;
	${props => props.home && `font-weight: 600;`}
`
const Link = styled(GLink)`
	text-decoration: none;
	box-shadow: none;
`

Nav.Item = Item

export {Nav}
