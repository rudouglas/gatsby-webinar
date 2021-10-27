import styled, {css} from 'styled-components'

const Center = styled.div`
	display: flex;
	justify-content: center;
`

const Pad = styled.div`
	display: flex;
	${props =>
		(props.padX &&
			css`
				width: ${props.padX}px;
			`) ||
		(props.padY &&
			css`
				margin-top: ${props.padY}px;
			`)}
`

const Box = {}
Box.Center = Center
Box.Pad = Pad

export {Box}
