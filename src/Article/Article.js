import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Article';

const Articles = ({ articles }) => {
    // console.log('ARTICLES', articles)
    const showArticle = articles.map(article => {
        return (
            <ArticleCard
            title={article.title}
            />
        )
    })

    return (
        <div>
            {showArticle}
        </div>
    )
}

export default Articles;