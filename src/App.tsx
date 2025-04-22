import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './pages/main';
import { SignUp } from './pages/signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="bg-gradient-to-b from-black via-[#8b003d] to-[#2a0000] min-h-screen">
      <Header />
      <Routes>
        <Route path='/netflix-clone' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
