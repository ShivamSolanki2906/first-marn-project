import { Link, useNavigate } from "react-router-dom";
function Header() {
  const auth = localStorage.getItem("user");

  const navegat = useNavigate();
  const logout = () => {
    localStorage.clear();
    navegat("/signup");
  };

  return (
    <div>
    <img className="logo-ecomm" src="https://dynamic.brandcrowd.com/preview/logodraft/1bda5077-ece7-412f-be53-02b50c5e9e83/image/large.png"/>
      {auth ? (
        <ul className="items">
          <li>
            <Link to="/" className="product">Product</Link>
          </li>
          <li>
            <Link to="/add"  className="product">Add Products</Link>
          </li>
          {/* <li>
            <Link to="/update/:id"> Update Product</Link>
          </li> */}

          {/* <li>
            <Link to="/profile">Profile</Link>
          </li> */}
          <li>
            <Link onClick={logout} to="/signup"  className="product">
              Logout <span className="user-name">({ JSON.parse(auth).name})</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="items textright">
          <li>
            {" "}
            <Link to="/signup"  className="product">SignUp</Link>
          </li>
          <li>
            <Link to="/login"  className="product">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Header;
