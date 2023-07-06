function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Name</h5>
          <h6 className="card-subtitle mb-2 text-muted">User Email</h6>
          <p className="card-text">User Bio</p>
          <a href="#" className="card-link">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Admin;
