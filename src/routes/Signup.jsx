function Signup() {
  return (
    <div>
      <div class="container mt-5">
        <h2>Registration Form</h2>
        <form>
          <div class="mb-3">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
        <p class="mt-3">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
