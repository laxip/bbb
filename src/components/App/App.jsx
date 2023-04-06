import { Outlet } from 'react-router-dom';
import Button from '../ui/Button';
import { getBeers } from '../../api/beers';

function App() {
  const onClick = async () => {
    try {
      const response = await getBeers();

      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>App CRUD</h1>

      <Button onClick={onClick}>Clear current state and load examples from API</Button>

      <Outlet />
    </div>
  );
}

export default App;
