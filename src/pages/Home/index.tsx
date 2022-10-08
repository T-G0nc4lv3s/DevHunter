import './styles.css';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="header-container">
          <h1>Desafio Github API</h1>
        </div>
        <div className="content-container">
          <p>Bootcamp Spring React - DevSuperior</p>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary">Começar</button>
        </div>
      </div>
    </>
  );
};

export default Home;
