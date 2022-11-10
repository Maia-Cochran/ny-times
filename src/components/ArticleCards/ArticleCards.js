import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCards.css';

const ArticleCards = ({ articles }) => {
    // const navigate = useNavigate();
    // console.log('ARTICLES', articles)
    const showArticles = articles.map((article, index) => {
        return (
            <div key={index} className='article-card'>
                <p>{article.title}</p>
                <p>{article.byline}</p>           
                <Link to={`/article/${article.title}`} state={article}>Click to view more!</Link>
            </div>
        )
    })

    return (
        <div className='article-cards-container'>
            {showArticles}
        </div>
    )
}

export default ArticleCards;