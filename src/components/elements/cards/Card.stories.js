import React from 'react'
import {storiesOf} from '@storybook/react'

import {Card} from './'

storiesOf('Card/', module).add('Card Full', () => (
	<div style={{width: 285}}>
		<Card>
			<Card.Img src="https://rickandmortyapi.com/api/character/avatar/172.jpeg" />
			<Card.Header strong>Character</Card.Header>
			<Card.Body>
				<Card.Text>Name: Sam Samson</Card.Text>
				<Card.Text>Gender: Male</Card.Text>
				<Card.Text>Status: Dead</Card.Text>
			</Card.Body>
		</Card>
	</div>
))

storiesOf('Card/', module).add('Card', () => (
	<div style={{width: 250, height: 400}}>
		<Card>Characters</Card>
	</div>
))
