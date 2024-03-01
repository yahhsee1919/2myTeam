import { Link } from "react-router-dom";

function Button() {
  return (
    <Link
      to="/contact"
      className="px-8 py-4 font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-darkGreen"
    >
      contact us
    </Link>
  );
}

export default Button;
