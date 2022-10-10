import './styles.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="bg-primary">
            <div className="navbar-container">
                <Link to="/">Github API</Link>
            </div>
        </nav>
    );
}

export default Navbar;