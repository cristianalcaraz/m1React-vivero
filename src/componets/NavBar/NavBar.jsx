import CartWidget from "./CartWidget"
import "./NavBar.css"
const NavBar = () => {

    return (
        <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" >
                    <img class="icono" src="./src/assets/img/icon.jpeg" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Interior</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Exterior</a>
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