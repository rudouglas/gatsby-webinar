import {css} from 'styled-components'
import {GREEN, RED} from './styles'

export const colors = css`
	${props =>
		props.success &&
		`
		background-color: ${GREEN};
		color: white;
		`};
	${props =>
		props.danger &&
		`
		background-color: ${RED};
		color: white;
		`};
`
