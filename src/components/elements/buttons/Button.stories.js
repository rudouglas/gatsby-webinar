import React from 'react'
import {storiesOf} from '@storybook/react'

import {Button, ButtonPopover} from './'

storiesOf('Button/', module).add('Button', () => <Button>Characters</Button>)

storiesOf('Button/', module).add('Button animate', () => (
	<Button animate>Characters</Button>
))
storiesOf('Button/', module).add('Popover', () => (
	<ButtonPopover popText={'This is a popup displaying some text!'}>
		Nice button
	</ButtonPopover>
))
storiesOf('Button/', module).add('Popover faint', () => (
	<ButtonPopover faint popText={'This is a popup displaying some text!'}>
		Nice button
	</ButtonPopover>
))
storiesOf('Button/', module).add('Popover animate', () => (
	<ButtonPopover animate popText={'This is a popup displaying some text!'}>
		Nice button
	</ButtonPopover>
))
