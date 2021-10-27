import React from 'react'
import Enzyme, {shallow, adapter} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import {Card, CharacterCard} from './'

const characterObjectMock = {
	id: '38',
	name: 'Beth Smith',
	gender: 'Female',
	status: 'Alive',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
}

describe('<CharacterCard />', () => {
	const wrapper = shallow(
		<CharacterCard
			character={characterObjectMock}
			linkURL={`/characters/${parseInt(characterObjectMock.id, 10)}/`}
		/>
	)

	it('should display card component', () => {
		expect(wrapper.find(Card).length).toBe(1)
	})
	it('should display three pieces of info', () => {
		expect(wrapper.find(Card.Text).length).toBe(3)
	})
})
