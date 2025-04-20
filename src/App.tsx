import React from 'react';
import { Header } from './components/header';
import {Footer} from './components/footer';
import { Main } from './pages/main';
function App() {
  return (
    <div className="bg-gradient-to-b from-black via-red-400 to-black h-full">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
