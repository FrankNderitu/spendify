import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/edit/:id" element={<EditTransaction />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;