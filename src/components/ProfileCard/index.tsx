import './styles.css';
import AvatarImg from 'assets/images/avatar.svg';

const ProfileCard = () => {

    return (
        <div className="profile-card-container">
            <div className="content-container">
                <div className="image-container">
                  <img src={AvatarImg} alt="Profile" /> 
                </div>
                <div className="info-container">
                   <span>Perfil: https://api.github.com/users/acenelio</span>
                   <span>Seguidores: 4379</span>
                   <span>Localidade: Uberlândia</span>
                   <span>Nome: Nelio Alves</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;