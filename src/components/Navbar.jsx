import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">💸</span>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Spendify
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-8 text-sm md:text-base">

          <Link
            to="/"
            className="text-gray-300 hover:text-emerald-400 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/add"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md"
          >
            + Add Transaction
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;