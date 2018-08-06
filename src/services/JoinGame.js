import axios from 'axios';
const URL = 'http://localhost:3000/game'

export default {
  join(tokenLink) {
    return axios.get(URL, tokenLink);
  }
};