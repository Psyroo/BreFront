import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
