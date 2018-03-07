import axios from 'axios';

const getPath = (id, path) => {
  let result;
  if (path) {
    result = `http://localhost:3000/item/${id}/similar`;
  } else {
    result = `/item/${id}/similar`;
  }

  return result;
};

const search = (id, local) => axios
  .get(getPath(id, local))
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
