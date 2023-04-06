import instance from './instance';

export const getBeers = () => {
  return instance.get('beers?per_page=10');
};
