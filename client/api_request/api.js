import axios from 'axios';

const search = id => axios
  .get(`http://localhost:3000/item/${id}/similar`)
  .then(({ data }) => (
    {
      page: 0,
      total: data.rows,
      list: data.rows.slice(0, 7),
      limit: Math.ceil(data.rows.length / 7),
    }
  ))
  .catch(err => err);

export default search;
