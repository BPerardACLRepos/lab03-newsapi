import React from 'react';
import ArticleList from '../components/news/ArticleList';
import Search from '../components/news/Search';
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

    handleQueryChange = ({ target }) => {
        this.setState({
            query: target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({
            loading: true,
        })

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
                <Search
                    query={query}
                    onQueryChange={this.handleQueryChange}
                    onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} />
            </>
        );
    }
}