function Footer() {
  return (
    <div className="container">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
      >
        {/*   <svg className="bi" width="30" height="24">
          <use xlink:href="#bootstrap" />
        </svg> */}
      </a>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2023 Company, Inc
        </p>
      </footer>
    </div>
  );
}

export default Footer;
