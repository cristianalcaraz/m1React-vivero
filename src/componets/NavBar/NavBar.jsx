import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {

    return (
        <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"  >
                    <Link>
                    <img className="icono" src="./src/assets/img/icon.jpeg" />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" ollapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  mx-auto">
                            <li className="nav-item">

                                <Link className="nav-link" to="/">Home  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Interior </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Exterior  </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </div>
    )
}
export default NavBar