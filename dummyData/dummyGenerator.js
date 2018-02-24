const dummy = require('./dummy.json');

const addRating = () => Math.ceil(Math.random() * 5);

const addReviews = () => Math.floor(Math.random() * 255);

const addPrice = () => Math.floor(Math.random() * 40000) / 100;

const hasPrime = () => {
  const bool = Math.floor(Math.random() * 4) % 4;
  return Boolean(bool);
};

const relativePath = item => `/thumbnail/img/${item.id}`;

const formatData = array => array.map((item) => {
  const format = item;
  format.rating = addRating();
  format.reviews = addReviews();
  format.price = addPrice();
  format.prime = hasPrime();
  format.relativePath = relativePath(item);
  return format;
});

module.exports = {
  data: formatData(dummy),
  rating: addRating,
  reviews: addReviews,
  price: addPrice,
  prime: hasPrime,
  path: relativePath,
};
