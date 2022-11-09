import '../App/App.css';
import React, { useEffect, useState } from 'react';
import { getSection } from '../apiCalls';
import SearchForm from '../SearchForm/SearchForm';
import Article from '../Article/Article';
// import Header from '../Header/Header';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getSection('home').then(data => {
      setArticles(data.results)
    })
  }, [])

  return (
    <div className="App">
      <SearchForm setArticles={setArticles} />
      <Article articles={articles} />
    </div>
  );
}

export default App;
