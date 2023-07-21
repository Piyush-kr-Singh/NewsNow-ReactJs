import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, date }) => {
  return (
    <div>
      <div className="card" style={{ backgroundColor: 'black', color: 'white' }}>
        <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2023/07/ride1up-e1688747099561.jpg?w=1200" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-center">
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark align-items-center">Read More</a>
          </div>
          <p className="card-text mt-3"><small className="text-light">Updated On: {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
