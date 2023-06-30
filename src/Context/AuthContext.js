import React, { createContext, useState } from 'react';

// Créez le contexte
export const AuthContext = createContext();

// Créez un composant fournisseur pour le contexte
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  // Fonction pour mettre à jour le token
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
