import React from 'react';
import './ArticleCard';

const ArticleCard = ({ title, abstract, url }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{abstract}</p>
            <p>{url}</p>
        </div>
    )
}

export default ArticleCard;