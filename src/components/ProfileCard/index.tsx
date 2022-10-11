import './styles.css';
import {Profile} from 'types/profile';

type Props = {
  profile: Profile,
};

const ProfileCard = ({ profile }: Props) => {
  return (
    <div className="profile-card-container">
      <div className="content-container">
        <div className="image-container">
          <img src={profile.avatar_url} alt="Profile" />
        </div>
        <div className="info-container">
          <span className="title">
            Informações
          </span>
          <span>
            <strong>Perfil: </strong> {profile.url}
          </span>
          <span>
            <strong>Seguidores: </strong> {profile.followers}
          </span>
          <span>
            <strong>Localidade: </strong> {profile.location}
          </span>
          <span>
            <strong>Nome: </strong> {profile.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
