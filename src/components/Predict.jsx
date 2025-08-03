import React, { useState, useEffect } from 'react';
import './Predict.css';

const Predict = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [surface, setSurface] = useState('');
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [showSuggestions1, setShowSuggestions1] = useState(false);
  const [showSuggestions2, setShowSuggestions2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Debounced fetch for player suggestions
  useEffect(() => {
    const fetchSuggestions = async (query, setSuggestions, setShowSuggestions) => {
      if (!query.trim()) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      try {
        const response = await fetch(`https://predict-backend-ews4.onrender.com/players?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to fetch player suggestions');
        const data = await response.json();
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (err) {
        console.error(err);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const timeout1 = setTimeout(() => fetchSuggestions(player1, setSuggestions1, setShowSuggestions1), 300);
    const timeout2 = setTimeout(() => fetchSuggestions(player2, setSuggestions2, setShowSuggestions2), 300);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [player1, player2]);

  const handlePlayerSelect = (playerName, playerNumber) => {
    if (playerNumber === 1) {
      setPlayer1(playerName);
      setShowSuggestions1(false);
    } else {
      setPlayer2(playerName);
      setShowSuggestions2(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await fetch("https://predict-backend-ews4.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player1, player2, surface })
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Prediction failed. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const getSurfaceInfo = (type) => {
    const surfaces = {
      'Hard': { icon: '⚡', name: 'Hard Court' },
      'Clay': { icon: '🔥', name: 'Clay Court' },
      'Grass': { icon: '🌿', name: 'Grass Court' }
    };
    return surfaces[type] || { icon: '🎾', name: 'Court' };
  };

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <span className="logo-icon">🏆</span>
            <h1>VolleyVision</h1>
          </div>
          <p className="subtitle">Smart Match Predictions Powered by AI</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="card-header">
            <h2> Match Setup</h2>
            <p>Configure players and court for intelligent prediction</p>
          </div>

          <div className="form">
            {/* Players Section */}
            <div className="players-section">
              {/* Player 1 */}
              <div className="player-input-group">
                <label className="label">
                  <span className="player-number player-a">A</span>
                  First Competitor
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                    onFocus={() => player1 && setShowSuggestions1(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions1(false), 200)}
                    placeholder="Type player name..."
                    className="player-input"
                  />
                  {showSuggestions1 && suggestions1.length > 0 && (
                    <div className="suggestions">
                      {suggestions1.map((player, index) => (
                        <div
                          key={index}
                          onClick={() => handlePlayerSelect(player, 1)}
                          className="suggestion"
                        >
                          {player}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* VS */}
              <div className="vs">
                <div className="vs-circle">VS</div>
              </div>

              {/* Player 2 */}
              <div className="player-input-group">
                <label className="label">
                  <span className="player-number player-b">B</span>
                  Second Competitor
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                    onFocus={() => player2 && setShowSuggestions2(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions2(false), 200)}
                    placeholder="Type player name..."
                    className="player-input"
                  />
                  {showSuggestions2 && suggestions2.length > 0 && (
                    <div className="suggestions">
                      {suggestions2.map((player, index) => (
                        <div
                          key={index}
                          onClick={() => handlePlayerSelect(player, 2)}
                          className="suggestion"
                        >
                          {player}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Surface Selection */}
            <div className="surface-section">
              <label className="section-label">Playing Surface</label>
              <div className="surface-options">
                {['Hard', 'Clay', 'Grass'].map((type) => {
                  const info = getSurfaceInfo(type);
                  const isActive = surface === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSurface(type)}
                      className={`surface-btn ${isActive ? 'active' : ''}`}
                    >
                      <span className="surface-icon">{info.icon}</span>
                      <span>{info.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!player1 || !player2 || !surface || isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Processing...
                </>
              ) : (
                <>
                  <span></span>
                  Generate Prediction
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className="result">
              <div className="result-header">
                <span>🎖️</span>
                <h3>Prediction Complete</h3>
              </div>
              <div className="result-content">
                <div className="winner">
                  <span className="result-label">Predicted Winner</span>
                  <span className="result-value">{result.winner}</span>
                </div>
                <div className="confidence">
                  <span className="result-label">Confidence</span>
                  <span className="result-value">{result.confidence}%</span>
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="error">
              <span>❌</span>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;