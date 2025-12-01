import React from 'react';
import useAuth from '../hooks/useAuth';

export default function AppNavigator({ onLogin }) {
  const { isLoggedIn, login } = useAuth();

  // This is a very small placeholder. Replace with react-router or your own navigation.
  if (!isLoggedIn) {
    return (
      <div style={{ padding: 16 }}>
        <h3>Please log in</h3>
        <button onClick={() => { login(); if (onLogin) onLogin(); }}>Log in</button>
      </div>
    );
  }

  return <div>App content for logged-in users</div>;
}
