import './styles.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <span className="header-content">
        <h1>Desafio Github API</h1>
      </span>
      <span className="body-content">
        <h3>Bootcamp Spring React - DevSuperior</h3>
      </span>
      <button className="btn btn-primary btn-search">
        <Link to="/search">Encontrar</Link>
      </button>
    </div>
  );
};

export default Home;
