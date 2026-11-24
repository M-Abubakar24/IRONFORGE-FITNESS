
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Trainers", path: "/trainers" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <Dumbbell size={27} />
        <span>IRONFORGE<span className="brand-dot">.</span></span>
      </Link>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            {link.name}
          </NavLink>
        ))}
        <Link to="/register" className="nav-cta" onClick={() => setMenuOpen(false)}>
          JOIN NOW
        </Link>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
};

export default Navbar;
