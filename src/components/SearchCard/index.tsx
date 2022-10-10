import './styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { REQUEST_URL } from 'util/requests';
import ProfileCard from 'components/ProfileCard';

type FormData = {
  profile: string;
};

type ProfileData = {
  avatar_url: string;
  url: string;
  followers: number;
  name: string;
  location: string;
};

const SearchCard = () => {

  const [profileData, setProfileData] = useState<ProfileData>();

  const [formData, setFormData] = useState<FormData>({
    profile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`${REQUEST_URL}${formData.profile}`).then((response) => {
      setProfileData(response.data);
    })
    .catch((error) => {
      setProfileData(undefined);
    });
  };

  return (
    <>
      <div className="card-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="ctrl-search">Encontre um perfil no Github</label>
            <input
              type="text"
              name="profile"
              value={formData.profile}
              id="ctrl-search"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="btn btn-primary btn-submit"
              value="Encontrar"
            />
          </div>
        </form>
      </div>
      {profileData && (
        <div className="profile-container">
          <ProfileCard profile={profileData} />
        </div>
      )}
    </>
  );
};

export default SearchCard;
