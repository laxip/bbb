const mapApiResponseToState = (data) => {
  return data.map((beer) => ({
    name: beer.name,
    foodPairing: beer.food_pairing,
    ibu: beer.ibu,
    id: beer.id,
    description: beer.description,
    contributedBy: beer.contributed_by,
  }));
};

export default mapApiResponseToState;
