import axios from 'axios';

const search = (id, callback) => axios
  .get(`http://localhost:3000/item/${id}/similar`)
  .then(({ data }) => {
    const result = {
      page: 0,
      total: data.rows,
      list: data.rows.slice(0, 7),
      limit: Math.ceil(data.rows.length / 7),
    };
    callback(false, result);
  })
  .catch(err => callback(err, false));

export default search;
