import React from 'react';
import ThemeProvider from '../components/ThemeContext';
import useAuth from '../hooks/useAuth';
import TaskBar from '../components/TaskBar';
import TapBar from '../components/TapBar';
import AppNavigator from '../navigation/AppNavigator';

export default function App() {
  const { isLoggedIn, login } = useAuth();

  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <>
          <TaskBar />
          <TapBar />
        </>
      ) : (
        <AppNavigator onLogin={login} />
      )}
    </ThemeProvider>
  );
}
