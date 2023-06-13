import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { config } from './utils/routesConfig';

const router = createBrowserRouter(config);

function App() {
  return (
    <div className="container py-4 px-3 mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
