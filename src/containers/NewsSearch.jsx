import React from 'react';
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
        if (loading) <h2>Loading...</h2>;

        return (
            <>
            </>
        );
    }
}