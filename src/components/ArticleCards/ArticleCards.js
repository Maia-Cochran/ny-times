import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCards.css';

const ArticleCards = ({ articles }) => {
    const showArticles = articles.map((article, index) => {
        let output = <></>
        if(article.title !== '' && article.byline !== '') {
            output = (
                <div key={index} className='article-card'>
                    <div className='article-title'>{article.title}</div>
                    <div className='article-byline'>{article.byline}</div>           
                    <Link className='view-more-link' to={`/article/${article.title}`} state={article}>Click to view more!</Link>
                </div>
            )
        }
            return output
    })

    return (
        <div className='article-cards-container'>
            {showArticles}
        </div>
    )
}

export default ArticleCards;