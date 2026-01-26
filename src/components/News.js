import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);

    const url = `https://gnews.io/api/v4/search?q=${props.category}&lang=en&page=1&max=${props.pageSize}&token=${props.apiKey}`;

    let data;
    try {
      data = await fetch(url, { mode: "cors" });
    } catch (err) {
      console.error("Fetch failed:", err);
      setLoading(false);
      return;
    }

    if (!data.ok) {
      console.error("HTTP error:", data.status);
      setLoading(false);
      return;
    }

    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalArticles || 0);
    setPage(1);

    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [props.category, props.pageSize]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;

    const url = `https://gnews.io/api/v4/search?q=${props.category}&lang=en&page=${nextPage}&max=${props.pageSize}&token=${props.apiKey}`;

    let data;
    try {
      data = await fetch(url, { mode: "cors" });
    } catch (err) {
      console.error("Fetch failed:", err);
      return;
    }

    if (!data.ok) {
      console.error("HTTP error:", data.status);
      return;
    }

    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles || []));
    setTotalResults(parsedData.totalArticles || 0);
    setPage(nextPage);
  };

  const hasMoreArticles = articles.length < totalResults;

  return (
    <div className="container my-4">
      <h1
        className="text-center mb-4"
        style={{ margin: '35px 0px', marginTop: '90px' }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinner />}

      {!loading && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMoreArticles}
          loader={hasMoreArticles ? <Spinner /> : null}
          style={{ overflow: 'visible' }}
        >
          <div className="row justify-content-center g-4">
            {articles.map((element) => (
              <div className="col-md-4 d-flex" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.image || "https://via.placeholder.com/240x180"}
                  newsUrl={element.url}
                  author={element.source?.name || "Unknown"}
                  date={element.publishedAt}
                  source={element.source?.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

News.defaultProps = {
  pageSize: 6,
  category: 'general',
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
