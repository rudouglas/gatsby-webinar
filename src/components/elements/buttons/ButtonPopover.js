import React, {useState} from 'react'
import Popover, {ArrowContainer} from 'react-tiny-popover'

import styled from 'styled-components'
import {FONT, BLUE, COOL_GREY_LIGHT} from '../../../config/styles'
import {Button} from './'

export const ButtonPopover = React.forwardRef(
	({children, popText, faint, animate, pos = 'top', pad = 5}, ref) => {
		const [popOverOpen, setPopOverOpen] = useState(false)
		return (
			<Popover
				isOpen={popOverOpen}
				position={pos}
				padding={pad}
				onClickOutside={() => setPopOverOpen(false)}
				content={({position, targetRect, popoverRect}) => (
					<ArrowContainer
						position={position}
						targetRect={targetRect}
						popoverRect={popoverRect}
						arrowColor={BLUE}
						arrowSize={10}
						arrowStyle={{opacity: 1}}>
						<PopoverText
							onClick={() => setPopOverOpen(prevState => !prevState)}>
							{popText}
						</PopoverText>
					</ArrowContainer>
				)}>
				<Button
					ref={ref}
					faint={faint}
					animate={animate}
					onClick={() => setPopOverOpen(prevState => !prevState)}>
					{children}
				</Button>
			</Popover>
		)
	}
)

const PopoverText = styled.div`
	font-family: ${FONT};
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	background-color: ${COOL_GREY_LIGHT};
	max-width: 276px;
	padding: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	border-radius: 0.3rem;
`

export default ButtonPopover
