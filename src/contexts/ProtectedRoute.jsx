import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

function ProtectedRoute({ children, ...props }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/main" />}</Route>
  );
}

export default ProtectedRoute;
