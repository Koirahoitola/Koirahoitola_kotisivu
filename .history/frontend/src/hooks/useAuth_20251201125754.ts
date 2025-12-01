// Lightweight auth hook placeholder. Replace with real logic later.
import { useState } from 'react';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return { isLoggedIn, login, logout } as const;
}
