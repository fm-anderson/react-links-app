import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container py-4 px-3 mx-auto">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Dashboard} />
          <Route path="/signup" exact Component={Signup} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
