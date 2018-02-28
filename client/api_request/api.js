import axios from 'axios';

const search = (id, callback) => axios
  .get(`http://localhost:3000/item/${id}/similar`)
  .then(list => callback(null, list))
  .catch(err => callback(err, null));

export default search;
