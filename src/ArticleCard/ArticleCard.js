import React from 'react';
import './ArticleCard';

const ArticleCard = ({ title, abstract, url }) => {
    return (
        <div>
            {title}
            {abstract}
            {url}
        </div>
    )
}

export default ArticleCard;