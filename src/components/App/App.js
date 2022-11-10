import '../App/App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getSection } from '../../apiCalls';
import SearchForm from '../SearchForm/SearchForm';
import ArticleCards from '../ArticleCards/ArticleCards';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

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
      <h1 className='header'>NY Times News Reader</h1>
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
        <Route path='/:other' element={
          <>
            <h2> Oops! Nothing to see here! 🙈</h2>
            <Link to={'/'}> Please return to article search page </Link>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
