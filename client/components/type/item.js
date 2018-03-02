import { shape, number, string, bool } from 'prop-types';

const items = shape({
  id: number.isRequired,
  title: string.isRequired,
  category: string.isRequired,
  rating: number.isRequired,
  reviews: number.isRequired,
  price: string.isRequired,
  prime: bool.isRequired,
});

export default items;
