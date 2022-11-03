import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Header />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='/' element={<PageNotFound />} />  
        </Routes>
      </div>

      <Footer />

    </div>

    </BrowserRouter>
  );
}

export default App;
