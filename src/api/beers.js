import instance from './instance';

export const getBeers = (perPage = 10) => {
  return instance.get(`beers?per_page=${perPage}`);
};
