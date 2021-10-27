import styled, {css} from 'styled-components'
import {FONT} from '../../../config/styles'

const PARAGRAPH_MARGIN = '8px'

const textAlignProps = css`
	text-align: ${props =>
		(props.align === 'center' && 'center') ||
		(props.align === 'right' && 'right') ||
		(props.align === 'justify' && 'justify') ||
		'left'};
`

export const Heading1 = styled.h1`
	font-family: ${FONT};
	font-size: 72px;
	font-weight: 300;
	${textAlignProps};
	margin: 0 0 ${PARAGRAPH_MARGIN};
`
export const Paragraph = styled.p`
	font-family: ${FONT};
	font-size: 16px;
	font-weight: 400;
	${textAlignProps};
	margin: 0 0 ${PARAGRAPH_MARGIN};
`

export const Lead = styled.p`
	font-family: ${FONT};
	font-size: 20px;
	font-weight: 300;
	${textAlignProps};
	margin: 0 0 ${PARAGRAPH_MARGIN};
`
