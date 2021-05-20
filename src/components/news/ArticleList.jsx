import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
    <ul aria-label="articles">
        {articles.map(article => (
            <li key={author - title}>
                <Article {...article} />
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