import { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const auth = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const userNameRef = useRef();

  const ref = collection(firestore, "users");
  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      userName: userNameRef.current.value,
      createdAt: new Date(),
    };

    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      addDoc(ref, data);
      console.log("User created");
    } catch (err) {
      console.log(err);
      err.message;
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Registration Form</h2>
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <span id="emailError" className="form-error"></span>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              ref={userNameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              ref={passwordRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              confirmPassword
            </label>
            <input
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              required
              ref={confirmPasswordRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <p className="mt-3">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
