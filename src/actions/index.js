import axios from 'axios'

export const FETCH_GOLIVES = 'FETCH_GOLIVES'
const ROOT_URL = 'http://nlbavwtls22:3001/api'

export const fetchGoLives = () => {
  const request = axios.get(ROOT_URL + '/golives')
  return {
    type: FETCH_GOLIVES,
    payload: request
  }
}
