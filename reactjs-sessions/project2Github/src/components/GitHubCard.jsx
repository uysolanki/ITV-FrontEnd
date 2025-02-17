// src/components/GitHubCard.js
import React from 'react';

const GitHubCard = ({ user }) => {
  return (
    <div className="github-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
      <div className="stats">
        <div className="repos">
          <strong>Repos:</strong> {user.public_repos}
        </div>
        <div className="followers">
          <strong>Followers:</strong> {user.followers}
        </div>
        <div className="following">
          <strong>Following:</strong> {user.following}
        </div>
      </div>
    </div>
  );
};

export default GitHubCard;
