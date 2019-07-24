import axios from 'axios';

function getRate():any {
  return axios.get('https://ss6cx1v57i.execute-api.ap-southeast-1.amazonaws.com/release/rate')
  .then(resp => {
    return resp.data;
  });
}

export default {
  getRate: getRate
}