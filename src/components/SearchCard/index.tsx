import './styles.css';

const SearchCard = () => {
  return (
    <div className="card-container">
      <form>
        <div className="form-container">
          <label htmlFor="ctrl-search">Encontre um perfil no Github</label>
          <input
            type="text"
            id="ctrl-search"
            placeholder="Usuário Github"
            onChange={() => {}}
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
