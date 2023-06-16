import { useRef } from "react";
import { auth, signIn } from "../firebase";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await signIn(auth, email, password);
      // Login successful, perform any additional logic
      console.log("You're signed in!");
    } catch (error) {
      console.log(error);
      // Handle login error
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Login Form</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="emailLogin" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailLogin"
              name="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordLogin" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordLogin"
              name="password"
              required
              ref={passwordRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="mt-3">
          Do you have an account, if not, sign up! <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
