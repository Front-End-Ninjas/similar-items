const seed = require('./seed.json');

const addRating = () => Math.ceil(Math.random() * 5);

const addReviews = () => Math.floor(Math.random() * 255);

const addPrice = () => {
  const price = Math.floor(Math.random() * 40000);
  const priceString = price.toString();
  const dollars = priceString.slice(0, priceString.length - 2);
  const cents = priceString.slice(priceString.length - 2);
  if (price < 100) {
    return `$0.${cents}`;
  }
  return `$${dollars}.${cents}`;
};

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
  data: formatData(seed),
  rating: addRating,
  reviews: addReviews,
  price: addPrice,
  prime: hasPrime,
  path: relativePath,
};
