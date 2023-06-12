import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';

export const config = [
  {
    path: '/',
    element: <Main />,
    // loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'signup',
        element: <Signup />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'login',
        element: <Login />,
        // loader: budgetLoader,
        // action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        // action: logoutAction,
      },
    ],
  },
];
