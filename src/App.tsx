import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './pages/main';
import { SignUp } from './pages/signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="bg-gradient-to-b from-black via-red-400 to-black h-full">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
