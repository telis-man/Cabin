import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );
};

export default Header;
