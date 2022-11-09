import React from 'react';
import './ArticleCard';
import { Link } from 'react-router-dom'

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