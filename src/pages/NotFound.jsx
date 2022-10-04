import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <img
            src="https://media1.tenor.com/images/91eb036f7ed3a40cc2191ec3865fcf89/tenor.gif?itemid=11538275"
            alt="gary coleman"
            className="mb-8"
          />
          <p className="text-3xl mb-8">404 - Page Not Found!</p>
          <Link className="btn btn-error btn-lg " to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
