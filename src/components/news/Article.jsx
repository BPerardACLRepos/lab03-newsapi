import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, image, link }) => (
    <>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <figure>
            <img src={image} alt={title - author} />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
        <a href={link}>{`View ${link}`}</a>
    </>
);

Article.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Article;