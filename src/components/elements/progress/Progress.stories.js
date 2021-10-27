import React from 'react'
import {storiesOf} from '@storybook/react'

import {Progress} from './'

storiesOf('Progress/', module).add('Progress empty', () => (
	<Progress width={'600px'} FOOBAR></Progress>
))
storiesOf('Progress/', module).add('Progress 0', () => (
	<Progress width={'600px'} FOOBAR>
		<Progress.Bar value={0} max={10} />
	</Progress>
))
storiesOf('Progress/', module).add('Progress full', () => (
	<Progress width={'600px'} FOOBAR>
		<Progress.Bar value={10} max={10} />
	</Progress>
))
storiesOf('Progress/', module).add('Progress Full success', () => (
	<Progress width={'600px'} FOOBAR>
		<Progress.Bar success value={10} max={10} />
	</Progress>
))
storiesOf('Progress/', module).add('Progress Full danger', () => (
	<Progress width={'600px'} FOOBAR>
		<Progress.Bar danger value={10} max={10} />
	</Progress>
))
storiesOf('Progress/', module).add('Progress mixed', () => (
	<Progress width={'600px'} FOOBAR>
		<Progress.Bar danger value={2.5} max={10} />
		<Progress.Bar success value={2.5} max={10} />
		<Progress.Bar value={2.5} max={10} />
	</Progress>
))
