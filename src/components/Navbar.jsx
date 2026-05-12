import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-3xl">💰</span>
          <h1 className="text-2xl font-bold">Spendify</h1>
        </div>
        
        <div className="flex gap-8">
          <Link to="/" className="hover:text-emerald-400 transition">Dashboard</Link>
          <Link to="/add" className="hover:text-emerald-400 transition">+ Add Transaction</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;