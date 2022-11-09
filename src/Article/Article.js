import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Article.css';

const Articles = ({ articles }) => {
    // const navigate = useNavigate();
    // console.log('ARTICLES', articles)
    const showArticle = articles.map((article, index) => {
        return (
            <ArticleCard
            title={article.title}
            url={article.url}
            key={index}
            />
        )
    })

    return (
        <div>
            {showArticle}
            {/* <Link></Link> */}
        </div>
    )
}

export default Articles;