import axios from 'axios';

export default {
  join(tokenLink) {
    return axios.get(tokenLink);
  }
};