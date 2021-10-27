import React from 'react'
import {Link as GLink} from 'gatsby'
import styled from 'styled-components'

import * as scProps from '../../../config/scProps'
import {FONT, FAINT_OPACITY, TRANSITION_TIME} from '../../../config/styles'

const BORDER_RADIUS = '5px'

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	width: 100%;
	box-sizing: border-box;
	margin: 9px;
	border-radius: ${BORDER_RADIUS};

	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	transition: box-shadow ${TRANSITION_TIME} ease-in-out;
	${scProps.colors}
`
const Link = styled(GLink)`
	font-size: 0px;
	:hover {
		opacity: ${FAINT_OPACITY.MEDIUM};
	}
	transition: opacity ${TRANSITION_TIME} ease-in-out;
`
const Img = styled.img`
	width: 100%;
	box-sizing: border-box;
	border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
	page-break-after: avoid;
	${props => props.faint && `opacity: ${FAINT_OPACITY.MEDIUM};`}

	&:last-child {
		border-bottom-left-radius: ${BORDER_RADIUS};
		border-bottom-right-radius: ${BORDER_RADIUS};

		${props =>
			props.noRadius &&
			`
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;`}
	}
`
// ^^^ noRadius prop is to override cases where CardImg is inside a Link tag and so gets bottom radius where is shouldn't

const HeaderBox = styled.div`
	width: 100%;
	height: 57px;
	display: table;
	box-sizing: border-box;
	margin: 0px;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
	&:last-child {
		border-bottom-left-radius: ${BORDER_RADIUS};
		border-bottom-right-radius: ${BORDER_RADIUS};
	}
`
const HeaderText = styled.h6`
	font-family: ${FONT};
	font-weight: ${props => (props.strong ? 500 : 400)};
	font-size: 16px;
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	padding-left: 16px;
	padding-right: 16px;
`
const Header = ({children, ...props}) => (
	<HeaderBox>
		<HeaderText {...props}>{children}</HeaderText>
	</HeaderBox>
)

const Body = styled.div`
	padding: 10px 16px;
`

const Text = styled.p`
	font-family: ${FONT};
	width: 100%;
	font-weight: 400;
	font-size: 0.9em;
	text-align: left;
	padding: 0px;
	margin: 0px;
	margin-bottom: 0.55em;
`

Card.Link = Link
Card.Img = Img
Card.Header = Header
Card.Body = Body
Card.Text = Text

export default Card
