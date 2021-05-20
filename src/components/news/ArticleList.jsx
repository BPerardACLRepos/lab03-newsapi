import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
    <ul aria-label="articles">
        {articles.map(article => (
            <li key={article.author - article.link} style={{ border: "solid 1px black" }}>
                <Article {...article} />
            </li>
        ))}
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    )
};

export default ArticleList;