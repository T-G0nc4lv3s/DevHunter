import './styles.css';
import SearchCard from 'components/SearchCard';
import ProfileCard from 'components/ProfileCard';

const Search = () => {
  return (
    <div className="page-container">
      <div className="top-container">
        <SearchCard />
      </div>
      <div className="bottom-container">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Search;
