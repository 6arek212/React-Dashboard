import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>iBraa Dashboard</h1>
            <div className="spacer"></div>
            <div className="links">
                {/* <Link to="/">Home</Link> */}
            </div>
        </nav>
    )
}


export default Navbar