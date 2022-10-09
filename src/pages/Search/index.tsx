import './styles.css';
import Navbar from 'components/Navbar';
import SearchCard from 'components/SearchCard';

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="top-container">
          <SearchCard />
        </div>
        <div className="bottom-container">
          <SearchCard />
        </div>
      </div>
    </>
  );
};

export default Search;
