import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {' '}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <div className="flex">
          <button
            to="/"
            className="btn btn-primary mb-2"
            onClick={() => navigate(-1)}
          >
            <ArrowUturnLeftIcon width={20} />
            <span> Go Back</span>
          </button>
        </div>
        <div className="flex">
          <Link to="/" className="btn btn-primary">
            <HomeIcon width={20} />
            <span> Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
