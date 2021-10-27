import React from 'react'
import { Button } from '@chakra-ui/react'

import { CardWithAvatar } from './CardWithAvatar'
//import ContentLoader from "react-content-loader";
import { UserInfo } from './UserInfo'
const CharacterCard = ({ character, linkURL }) => (
	<CardWithAvatar
		key={character.id}
		src={character.image}
		avatarProps={{
			src: character.image,
			name: character.name
		}}
	>
		<UserInfo mt="3" name={character.name} species={character.species} status={character.status} gender={character.gender} />
		<a href={linkURL}>
			<Button variant="outline" colorScheme="blue" rounded="full" size="sm" width="full" mt="3">
				View Profile
			</Button>
		</a>
	</CardWithAvatar>
	// <Card outline color="secondary">
	// 	<Card.Link to={linkURL}>
	// 		<Card.Img noRadius src={character.image} alt={character.name} />
	// 	</Card.Link>

	// 	<Card.Header strong>{character.name}</Card.Header>
	// 	<Card.Body>
	// 		<Card.Text>Species: {character.species}</Card.Text>
	// 		<Card.Text>Gender: {character.gender}</Card.Text>
	// 		<Card.Text>Status: {character.status}</Card.Text>
	// 	</Card.Body>
	// </Card>
)

export default CharacterCard
