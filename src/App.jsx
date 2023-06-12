import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="container py-4 px-3 mx-auto">
      <Nav />
      <h1>App</h1>
      <Signup />
      <Login />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
