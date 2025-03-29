function CatCard({ cat, onBan }) {
    return (
      <div className="card">
        <h2>{cat.name}</h2>
        <div className="attributes">
          <button onClick={() => onBan(cat.name)}>{cat.name}</button>
          <button onClick={() => onBan(cat.weight.metric)}>
            {cat.weight.metric} lbs
          </button>
          <button onClick={() => onBan(cat.origin)}>{cat.origin}</button>
          <button onClick={() => onBan(cat.life_span)}>
            {cat.life_span} years
          </button>
        </div>
        {cat.image?.url && (
          <img src={cat.image.url} alt={cat.name} width="250" />
        )}
      </div>
    );
  }
  
  export default CatCard;
  