import axios from 'axios'
const URL = 'http://localhost:3000/game'

export default {
  create(data) {
    return axios.post(URL, data);
  }
};