import React from 'react';
import ArticleList from '../components/news/ArticleList';
import { getArticles } from '../services/newsApi';

export default class NewsSearch extends React.Component {
    state = {
        loading: true,
        articles: [],
        query: 'Bill Murray',
    }

    async componentDidMount() {
        const articles = await getArticles(this.state.query);
        this.setState({
            loading: false,
            articles,
        })
    }

    render() {
        const { loading, articles, query } = this.state;

        if (loading) <h2>Loading...</h2>;

        return (
            <>
                <ArticleList articles={articles} />
            </>
        );
    }
}