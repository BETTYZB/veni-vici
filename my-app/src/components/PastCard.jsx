function PastCard({ history }) {
    return (
      <aside className="history">
        <h2>Who have we seen so far?</h2>
        <div className="history-list">
          {history.map((cat, index) => (
            <div key={index}>
              {cat.image?.url && (
                <img src={cat.image.url} alt={cat.name} width="100" />
              )}
              <p>
                A {cat.name} cat from {cat.origin}
              </p>
            </div>
          ))}
        </div>
      </aside>
    );
  }
  
  export default PastCard;
  