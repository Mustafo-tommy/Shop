import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
