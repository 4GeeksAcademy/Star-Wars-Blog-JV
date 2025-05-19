const CardPersonajes = ({ personaje, onLearnMore, onToggleFavorite }) => {
  const { name, gender, hair_color, eye_color } = personaje;

  return (
    <div className="card" style={{
      width: '18rem',
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <img src="https://via.placeholder.com/400x200" alt={name} />
      <h5>{name}</h5>
      <p>Gender: {gender}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
      <button onClick={onLearnMore}>Learn more!</button>
      <button onClick={onToggleFavorite}>❤️</button>
    </div>
  );
};

export default CardPersonajes;
