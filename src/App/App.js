import '../App/App.css';
import React, { useEffect, useState } from 'react';
import { getData } from '../apiCalls';
import SearchForm from '../SearchForm/SearchForm';
import Article from '../Article/Article';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getData('home').then(data => {
      console.log('DATA', data)
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
