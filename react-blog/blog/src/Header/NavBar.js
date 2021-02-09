import {Link} from 'react-router-dom';
import "./NavBar.css";
const NavBar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="brand">MY Blog</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <a href="#">About</a>
        <Link to="/new-post">New Post</Link>
      </div>
    </nav>
   );
}
 
export default NavBar;