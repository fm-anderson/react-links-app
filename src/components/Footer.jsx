import { Link } from 'react-router-dom';
import { authors } from '../utils/constants';

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-1 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link px-2 text-body-secondary">
              Dashboard
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          Created By:{' '}
          {authors.map((author) => {
            return (
              <span key={author.id}>
                <a target="_blank" href={author.link}>
                  {author.name}
                </a>{' '}
                |{' '}
              </span>
            );
          })}
          &copy; {new Date().getFullYear()} LinksApp
        </p>
      </footer>
    </div>
  );
}

export default Footer;
