import styled from 'styled-components'

import * as scProps from '../../../config/scProps'
import {BLUE, COOL_GREY_LIGHT} from '../../../config/styles'

const Progress = styled.div`
	display: -ms-flexbox;
	display: flex;
	height: 5rem;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: ${COOL_GREY_LIGHT};
	border-radius: 0.25rem;
	width: ${props => (props.width ? props.width : '100%')};
	height: ${props => (props.height ? `${props.height}px` : '5rem')};
`
const Bar = styled.div`
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	-ms-flex-pack: center;
	justify-content: center;
	color: #fff;
	text-align: center;
	white-space: nowrap;
	background-color: ${BLUE};
	color: white;
	${scProps.colors};
	width: 0.001%;
	${props =>
		props.value && props.max && `width: ${(props.value / props.max) * 100}%;`};
	transition: width 0.6s ease;
`
// ${props => props.value && `width: ${props.value}%;`};
// ${props => props.value && `width: ${props.max / props.value}%;`};

Progress.Bar = Bar

export {Progress}
