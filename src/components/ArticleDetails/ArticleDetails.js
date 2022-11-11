import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetails.css';

const ArticleDetails = ({ articles }) => {
  const navigate = useNavigate()
  const params = useParams()
  const findArticle = articles.find(article => article.title.includes(params.title))
  console.log('FIND ARTICLE', findArticle)
  const publishDate = new Date(findArticle.published_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
  const editDate = new Date(findArticle.updated_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})

  return (
    <div className='details-container'>
      <p className='title'>{findArticle.title}</p>
      <p className='byline'>{findArticle.byline}</p>
      {findArticle.abstract !== '' && <p className='abstract'>"{findArticle.abstract}"</p>}
      <img className='photo' src={findArticle.multimedia[1].url} alt={findArticle.title}/>
      {publishDate !== '' && <p className='publish-date'>Published: {publishDate}</p>}
      {editDate !== '' && <p className='edit-date'>Updated: {editDate}</p>}
      {findArticle.section !== '' && <p className='topic'>Topic: {(findArticle.section).toUpperCase()}</p>}
      {findArticle.subsection !== '' && <p className='sub-topic'>SubTopic: {(findArticle.subsection).toUpperCase()}</p>}
      <a className='full-article' href={findArticle.url}>See Full Article</a>
      <p className='return-home'><button onClick={() => navigate('/')}>Return to home page</button></p>
    </div>
  )
}

export default ArticleDetails;