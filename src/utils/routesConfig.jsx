import Main from '../pages/Main';
import Error from '../pages/Error';
import Login from '../routes/Login';
import Signup from '../routes/Signup';
import Dashboard from '../routes/Dashboard';

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
        // loader: signupLoader,
        // action: signupAction,
        errorElement: <Error />,
      },
      {
        path: 'login',
        element: <Login />,
        // loader: loginLoader,
        // action: loginAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        // action: logoutAction,
      },
    ],
  },
];
