import './App.css';
import { useEffect, useState } from 'react';

const API_URL = "https://api.thecatapi.com/v1/breeds";

function App() {
  const [catData, setCatData] = useState([]);
  const [currentCat, setCurrentCat] = useState(null);
  const [history, setHistory] = useState([]);
  const [banList, setBanList] = useState([]);

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCatData(data);
      getRandomCat(data);
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };

  const getRandomCat = (data = catData) => {
    const filtered = data.filter(
      (cat) =>
        !banList.includes(cat.name) &&
        !banList.includes(cat.origin) &&
        !banList.includes(cat.life_span)
    );

    if (filtered.length === 0) {
      alert("No more cats that match your filters!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    const selectedCat = filtered[randomIndex];
    setCurrentCat(selectedCat);
    setHistory((prev) => [...prev, selectedCat]);
  };

  const handleBan = (value) => {
    setBanList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="app-container">
      {/* Left panel – History */}
      <aside className="left-panel">
        <h2>History</h2>
        {history.map((cat, index) => (
          <div key={index} className="history-item">
            {cat.image?.url && <img src={cat.image.url} alt={cat.name} width="80" />}
            <p><strong>{cat.name}</strong> from {cat.origin}</p>
          </div>
        ))}
      </aside>

      {/* Main display */}
      <main className="main-display">
        <h1>Veni Vici!</h1>
        <h4>Discover cats from your wildest dreams!</h4>
        <h5>😺😸😹😻😼😽🙀😿😾</h5>

        {currentCat && (
          <div className="cat-card">
            <h2>{currentCat.name}</h2>
            <div className="attributes">
              <button onClick={() => handleBan(currentCat.name)}>{currentCat.name}</button>
              <button onClick={() => handleBan(currentCat.origin)}>{currentCat.origin}</button>
              <button onClick={() => handleBan(currentCat.life_span)}>{currentCat.life_span} years</button>
            </div>
            {currentCat.image?.url && <img src={currentCat.image.url} alt={currentCat.name} width="250" />}
          </div>
        )}

        <button className="discover" onClick={() => getRandomCat()}>
          🚀 Discover!
        </button>
      </main>

      {/* Right panel – Ban List */}
      <aside className="right-panel">
        <h2>Ban List</h2>
        <p>Click a value to unban</p>
        <div className="ban-list">
          {banList.map((item, index) => (
            <button key={index} onClick={() => handleBan(item)}>
              {item} ❌
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default App;
