import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => (
    <ul aria-label="articles">
        {articles.map(article => (
            <li key={author - title}>

            </li>
        ))}
    </ul>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    )
};

export default ArticleList;