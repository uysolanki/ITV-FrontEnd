// src/components/GitHubCardList.js
import React, { useState, useEffect } from 'react';
import GitHubCard from './GitHubCard';
import './GitHubCardList.css'

const GitHubCardList = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (username !== '') {
      setLoading(true);
      setError('');

      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.message === 'Not Found') {
            setError('User not found!');
            setUsers([]);
          } else {
            setUsers([data]);
          }
        })
        .catch((error) => {
          setLoading(false);
          setError('Error fetching data!');
        });
    }
  }, [username]);

  const handleSearch = () => {
    setUsername(username);
  };

  return (
    <div className="card-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="card-list">
        {users.length > 0 &&
          users.map((user) => <GitHubCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default GitHubCardList;
