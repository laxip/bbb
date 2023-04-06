import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Read from './components/Read';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Read />,
      },
    ],
  },
]);

export default router;
