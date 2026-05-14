import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50 backdrop-blur">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">

          <span className="text-3xl hover:scale-110 transition-transform duration-300">
            💸
          </span>

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Spendify
          </h1>

        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-4 md:gap-6 text-sm md:text-base">

          <Link
            to="/"
            className="text-gray-300 hover:text-emerald-400 transition-all duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/add"
            className="bg-emerald-500 hover:bg-emerald-600 hover:scale-105 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300"
          >
            + Add Transaction
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;