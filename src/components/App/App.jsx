import { Outlet } from 'react-router-dom';
import Button from '../ui/Button';

function App() {
  return (
    <div>
      <h1>App CRUD</h1>

      <Button>Clear current state and load examples from API</Button>

      <Outlet />
    </div>
  );
}

export default App;
