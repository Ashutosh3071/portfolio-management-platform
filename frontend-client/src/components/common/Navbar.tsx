import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-500">
        My Portfolio
      </h1>

      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
        <li><Link to="/skills" className="hover:text-indigo-400">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
        <li><Link to="/chat" className="hover:text-indigo-400">Chat</Link></li>
        <li><Link to="/analytics" className="hover:text-indigo-400">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
