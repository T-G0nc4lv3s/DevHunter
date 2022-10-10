import './styles.css';
import SearchCard from 'components/SearchCard';
import ProfileCard from 'components/ProfileCard';
import {Profile} from 'types/profile';

const Search = () => {

  const profile: Profile = {
      avatar_url: "https://avatars.githubusercontent.com/u/87336526?v=4",
      url: "https://api.github.com/users/T-G0nc4lv3s",
      followers: 0,
      name: "Thiago Gonçalves",
      location: "Brasil",
  }

  return (
    <div className="page-container">
      <div className="top-container">
        <SearchCard />
      </div>
      <div className="bottom-container">
       {profile &&
         <ProfileCard profile={profile}/>
       }
      </div>
    </div>
  );
};

export default Search;
