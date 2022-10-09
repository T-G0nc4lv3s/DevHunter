import './styles.css';
import Navbar from 'components/Navbar';
import SearchCard from 'components/SearchCard';
import ProfileCard from 'components/ProfileCard';

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="top-container">
          <SearchCard />
        </div>
        <div className="bottom-container">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default Search;
