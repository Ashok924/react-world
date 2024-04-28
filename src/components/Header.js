import {Link} from 'react-router-dom';

const Title = () => {
  return (
    // <h1>Food Zone</h1>
    <img
      className="logo"
      alt="logo"
      src={
        "data:image/png;base64,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"
      }
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header
