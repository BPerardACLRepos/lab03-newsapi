export const getArticles = async (query) => {
    const res = await fetch(`
    https://newsapi.org/v2/everything?q=${query}&from=2021-04-20&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
    const json = await res.json();
    const articles = json.articles;

    return articles.map(article => ({
        author: article.author,
        title: article.title,
        description: article.description,
        image: article.urlToImage,
        link: article.url,
    })
    );
}

// NewsAPI Return Shape
// 
// {
//     "status": "ok",
//     "totalResults": 11112,
//     -"articles": [
//     -{
//     -"source": {
//     "id": null,
//     "name": "MarketWatch"
//     },
//     "author": "Philip van Doorn",
//     "title": "These energy stocks are expected by Wall Street to rise up to 37% over the next year",
//     "description": "A growing economy has helped lift oil prices 31% this year.",
//     "url": "https://www.marketwatch.com/story/these-energy-stocks-are-expected-by-wall-street-to-rise-up-to-37-over-the-next-year-11621529424",
//     "urlToImage": "https://images.mktw.net/im-341546/social",
//     "publishedAt": "2021-05-20T16:50:00Z",
//     "content": "Despite the doom and gloom in the financial media over the past week, 2021 has been a good year for the stock market. And a long-term upward ride for energy stocks may be just beginning.Jesse Felder … [+5310 chars]"
//     },
//     -{
//     -"source": {
//     "id": null,
//     "name": "SlashGear"
//     },
//     "author": "Chris Davies",
//     "title": "Ford’s most outrageous F-150 Lightning feature is right in front of you",
//     "description": "Ford’s new electric pickup doesn’t look like a spaceship, or a movie prop, it looks like an F-150. It feels a little weird that normality alone leaves the F-150 Lightning an outlier in the fledgling EV truck segment, but then Ford’s challenge is arguably a ve…",
//     "url": "https://www.slashgear.com/fords-most-outrageous-f-150-lightning-feature-is-right-in-front-of-you-20673749/",
//     "urlToImage": "https://cdn.slashgear.com/wp-content/uploads/2021/05/2022-ford-f-150-lightning-home-1.jpg",
//     "publishedAt": "2021-05-20T16:48:26Z",
//     "content": "Ford’s new electric pickup doesn’t look like a spaceship, or a movie prop, it looks like an F-150. It feels a little weird that normality alone leaves the F-150 Lightning an outlier in the fledgling … [+4804 chars]"
//     },
//     -{
//     -"source": {
//     "id": null,
//     "name": "Seeking Alpha"
//     },
//     "author": "Bill Zettler",
//     "title": "Forum Merger III: Electric Last Mile Is Why I'm Buying This SPAC",
//     "description": "Electric Last Mile will be the first EV company on the market with a Class 1 EV van. Here is my analysis on this SPAC merger and my bullish thesis.",
//     "url": "https://seekingalpha.com/article/4430195-fiii-electric-last-mile-is-why-im-buying-this-spac",
//     "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1284423463/large_image_1284423463.jpg",
//     "publishedAt": "2021-05-20T16:46:31Z",
//     "content": "Photo by syahrir maulana/iStock via Getty Images\r\nHere is how Business Insider describes SPACs: \"A Special Purpose Acquisition Company (SPAC) is a company created solely to merge or acquire another b… [+7574 chars]"
//     },
//     ]
//     }