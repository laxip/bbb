import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

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
      {
        path: 'edit/:id',
        element: <Edit />,
      },
    ],
  },
]);

export default router;
