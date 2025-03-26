import React, { useEffect, useState } from "react";
import "./styles/GitHubProfile.css";

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null); // État pour stocker le profil GitHub
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    // Fonction pour récupérer les données du profil GitHub
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/github-john-doe"
        );
        if (!response.ok) {
          throw new Error("Impossible de récupérer le profil GitHub");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="github-profile">
      <h2>Profil GitHub de {profile.name}</h2>
      <img
        src={profile.avatar_url}
        alt={profile.name}
        style={{ width: 150, borderRadius: "50%" }}
      />
      <p>
        <strong>Nom:</strong> {profile.name}
      </p>
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
      <p>
        <strong>Public Repos:</strong> {profile.public_repos}
      </p>
      <p>
        <strong>Followers:</strong> {profile.followers}
      </p>
      <p>
        <strong>Following:</strong> {profile.following}
      </p>
      <a href={profile.html_url} target="_blank" rel="noopener nofollow">
        Voir le profil complet sur GitHub
      </a>
    </div>
  );
};

export default GitHubProfile;
