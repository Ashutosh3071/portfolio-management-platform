import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <div className="space-x-6">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/skills" className="hover:underline">
            Skills
          </NavLink>
          <NavLink to="/projects" className="hover:underline">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
          <NavLink to="/chat" className="hover:underline">
  Chat
</NavLink>

<NavLink to="/analytics" className="hover:underline">
  Analytics
</NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
