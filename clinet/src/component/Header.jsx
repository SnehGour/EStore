import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/catelog" className="nav-link text-light" style={{ textDecoration: 'none' }}>CATELOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light" style={{ textDecoration: 'none' }}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-light" style={{ textDecoration: 'none' }}>CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-light" style={{ textDecoration: 'none',margin:'0 20px' }}><i className="bi bi-bag"></i></Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header