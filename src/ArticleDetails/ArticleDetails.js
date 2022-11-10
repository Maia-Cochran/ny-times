import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetails.css';

const ArticleDetails = ({ articles }) => {
  const navigate = useNavigate()
  const params = useParams()
  const findArticle = articles.find(article => article.title.includes(params.title))
  console.log('FIND ARTICLE', findArticle)
//   const publishDate = new Date(findArticle.published_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
//   const editDate = new Date(findArticle.updated_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})

  return (
    <div>
      <p>{findArticle.title}</p>
      <p>{findArticle.byline}</p>
      <p>{findArticle.abstract}</p>
      {/* <p>Published: {publishDate}</p> */}
      {/* <p>Updated: {editDate}</p> */}
      <p>{findArticle.section}</p>
      <p>{findArticle.subsection}</p>
      <a href={findArticle.url}>See Full Article</a>
      <img src={findArticle.multimedia[1].url} alt=''/>
      <button onClick={() => navigate('/')}>Return to home page</button>
    </div>
  )
}

export default ArticleDetails;