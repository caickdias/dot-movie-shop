import React from 'react';
import './App.css';
import Home from './components/pages/Home';

import { AppProvider } from './context/Provider';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
