import { useBeersStore } from '../../store';
import Button from '../ui/Button';
import { getBeers } from '../../api/beers';

const Read = () => {
  const beers = useBeersStore((state) => state.beers);
  const setBeers = useBeersStore((state) => state.setBeers);

  const loadAndSetBeers = async () => {
    try {
      const response = await getBeers();

      if (response?.data) {
        setBeers(
          response.data.map((beer) => ({
            name: beer.name,
            foodPairing: beer.food_pairing,
            ibu: beer.ibu,
            id: beer.id,
            description: beer.description,
            contributedBy: beer.contributed_by,
          }))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(beers);

  return (
    <div>
      <Button onClick={loadAndSetBeers}>Clear current state and load examples from API</Button>
    </div>
  );
};

export default Read;
