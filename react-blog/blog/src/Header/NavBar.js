import "./NavBar.css";
const NavBar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="brand">MY Blog</h1>
      <div className="links">
        <a href="#">HOME</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </div>
    </nav>
   );
}
 
export default NavBar;