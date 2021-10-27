import {useState, useEffect} from 'react'
import {randFromArray} from '../'

const useRandomCharacters = (data, numberOfCharacters) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setCharacters(randFromArray(data, numberOfCharacters))
		// eslint-disable-next-line
	}, [])

	return characters
}

export default useRandomCharacters
