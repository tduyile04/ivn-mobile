import axios from 'axios'

export default (token) => {
  return axios.create({
    baseURL: 'https://ivotenaija.herokuapp.com/',
    headers: {
      'Authorization': `${token}`
    }
  })
}
