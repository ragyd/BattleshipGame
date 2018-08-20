import axios from 'axios'

const game = JSON.parse(localStorage.getItem('Game'));

console.log(localStorage.getItem('Game'))

const URL = 'http://localhost:3000/game/' + game['id'] + '/player/' + game['playerId1'] + '/board'

export default {
  location(data) {
    return axios.put(URL, data);
  }
};