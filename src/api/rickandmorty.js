import axios from 'axios'

const base = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

export const fetchCharacters = page => {
  if (page !== undefined) {
    return base.get(`/character/?page=${page}`)
  }
  return base.get('/character')
}