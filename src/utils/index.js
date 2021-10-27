// LIST GENERATION AND MANIPULATION

export const integerList = (start, length) => {
	return Array.from({length: length}, (v, k) => k + start)
}
// returns a list (of length 'length') of integers, starting with 'start'

export const randList = (numMax, outputLength) => {
	let array = integerList(1, numMax)
	array = shuffle(array)
	return array.slice(0, outputLength)
}
// returns an array of integers. 'numMax' is the maximum number that the integer can be, and 'outputLength' is the length of the array

export const randFromArray = (oldArray, outputLength) => {
	let array = shuffle(oldArray)
	return array.slice(0, outputLength)
}
// returns 'outputLength' random items from an array

export const shuffle = oldArray => {
	let array = [...oldArray]
	var i = 0,
		j = 0,
		temp = null

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}
// returns a shuffled version of 'oldArray'

// CHECKING ARRAYS OF OBJECTS

export const arrObjsTruthyProperty = (arr, property) =>
	arr.every(obj => obj[property])
// returns a boolean - whether or not all of the objects in 'arr' have a truth 'property

export const picsComplete = pics =>
	arrObjsTruthyProperty(pics, 'lastDroppedItem')
// boolean whether all pics have truthy lastDroppedItem
