import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Read from './components/Read';
import Create from './components/Create';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Read />,
      },
      {
        path: 'create',
        element: <Create />,
      },
    ],
  },
]);

export default router;
