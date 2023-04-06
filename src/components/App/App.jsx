import { Link, Outlet } from 'react-router-dom';
import { Ul } from './App.styled';

function App() {
  return (
    <div>
      <h1>App CRUD</h1>

      <Ul>
        <li>
          <Link to="/">Read beers</Link>
        </li>
        <li>
          <Link to="/add">Add beer</Link>
        </li>
      </Ul>

      <Outlet />
    </div>
  );
}

export default App;
