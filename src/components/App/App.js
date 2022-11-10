import '../App/App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getSection } from '../../apiCalls';
import SearchForm from '../SearchForm/SearchForm';
import ArticleCards from '../ArticleCards/ArticleCards';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Header from '../Header/Header';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getSection('arts').then(data => {
      console.log('ARTICLES BY SECTION', data.results)
      setArticles(data.results)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <SearchForm setArticles={setArticles} />
            <ArticleCards articles={articles} />
          </>
        } />
        <Route path='/article/:title' element={
          <>
            <ArticleDetails articles={articles} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
