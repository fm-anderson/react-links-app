import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
      <Nav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Main;
