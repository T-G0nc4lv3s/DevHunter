import './styles.css';
import {useState} from 'react';

type FormData = {
  profile: string;
}

const SearchCard = () => {

  const [formData, setFormData] = useState<FormData>({
    profile:''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.warn(formData);
  }

  return (
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
  );
};

export default SearchCard;
