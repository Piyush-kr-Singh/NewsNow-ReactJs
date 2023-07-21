import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';

const News = ({ country = 'in', pageSize = 99, category = 'general', setProgress}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const myStyle = (backgroundColor, textColor) => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  };

  const fetchData = async (currentPage) => {
    try {
      setProgress(10);
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6d4a7ebb0982404b884efc3bd9be6314&page=${currentPage}&pageSize=${pageSize}`;
      const response = await fetch(url);
      setProgress(40);
      const data = await response.json();
      console.log(data);
      setProgress(60);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [country, pageSize, category, page, setProgress]);

  const handlePrevClick = () => {
    setProgress(0);
    console.log('previous');
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    if (page + 1 > Math.ceil(totalResults / pageSize)) {
      return;
    }
    setProgress(0);
    setPage((prevPage) => prevPage + 1);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='container my-3' style={myStyle('#042743', 'white')}>
      <div className='container text-center my-3'>
        <h2 style={{marginTop : '80px'}}>NewsNow - Top {capitalizeFirstLetter(category)} Headlines</h2>
      </div>

      {loading && <Spinner />}
      <div className='row my-3'>
        {articles.map((element) => (
          <div className='col-md-4 my-2' key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 50) + '...' : ''}
              description={element.description ? element.description.slice(0, 93) + '...' : ''}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>

      <div className='container d-flex justify-content-between my-3'>
        <button disabled={page <= 1} type='button' className='btn btn-dark' onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type='button'
          className='btn btn-dark'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 99,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.any,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
