import { useBeersStore } from '../../store';
import Button from '../ui/Button';
import { getBeers } from '../../api/beers';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Read.styled';
import mapApiResponseToState from '../../api/helpers/mapApiResponseToState';
import { useCallback } from 'react';

const Read = () => {
  const beers = useBeersStore((state) => state.beers);
  const setBeers = useBeersStore((state) => state.setBeers);
  const removeBeer = useBeersStore((state) => state.removeBeer);

  const loadAndSetBeers = useCallback(async () => {
    try {
      const response = await getBeers();

      if (response?.data) {
        setBeers(mapApiResponseToState(response.data));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div>
      <ButtonContainer>
        <Button onClick={loadAndSetBeers}>Clear current state and load examples from API</Button>
      </ButtonContainer>

      {beers.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Contributed by</th>
              <th>IBU</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {beers.map((beer) => (
              <tr key={beer.id}>
                <td>{beer.name}</td>
                <td>{beer.description}</td>
                <td>{beer.contributedBy}</td>
                <td>{beer.ibu}</td>
                <td>
                  <Link to={`/edit/${beer.id}`}>Edit</Link> |{' '}
                  <Link
                    to="#"
                    onClick={() => {
                      removeBeer(beer.id);
                    }}
                  >
                    Remove
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {beers.length < 1 && <div>No data</div>}
    </div>
  );
};

export default Read;
