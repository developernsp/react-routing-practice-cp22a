import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <h3 className="logo-name">Wave</h3>
      </div>
      <ul className="list-container">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/about">About</Link>
        </li>
        <li className="item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default Header
