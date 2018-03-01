const shiftList = (page, list) => {
  const state = {};
  const start = page * 7;
  state.page = page;
  state.list = list.slice(start, start + 7);
  return state;
};

const determinePage = (name, page, limit) => {
  let newPage;

  if (name === 'right' && page < limit - 1) {
    newPage = page + 1;
  } else if (name === 'left' && page > 0) {
    newPage = page - 1;
  } else if (name === 'start-over') {
    newPage = 0;
  }

  return newPage;
};

const helper = {
  shift: shiftList,
  page: determinePage,
};

export default helper;
