import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import ProtectedRoute from "../contexts/ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Profile from "./Profile";
import { useState } from "react";

const Main = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});
  // const [alternateAvatar, setAlternateAvatar] = useState("");

  return (
    <>
      <CurrentUserContext.Provider value={null}>
        <Nav />
        <main className="container">
          <Outlet />
          {/* <ProtectedRoute path="/profile"> */}
          <Profile />
          {/* </ProtectedRoute> */}
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
};
export default Main;
