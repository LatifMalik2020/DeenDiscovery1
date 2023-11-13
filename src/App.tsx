import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import HomePage from './components/Home/HomePage';
import QuranPage from './components/Quran/QuranPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/quran" Component={QuranPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </Router>
  );
};

export default App;

