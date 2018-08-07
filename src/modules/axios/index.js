import axios from 'axios'

export default () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiZTBkZDZmMzQtMjlmNC00NDUwLWFkMDItYjk3Y2YzYWFkM2MxIn0sImlhdCI6MTUzMzIxOTI2MCwiZXhwIjoxNTMzMzAyMDYwfQ.uEDVhjXZt-D6EurXahsS0GA3nAk3TEyJ5A6JLOqrfk0'
  return axios.create({
    baseURL: 'https://ivotenaija.herokuapp.com/',
    headers: {
      'Authorization': `${token}`
    }
  })
}
