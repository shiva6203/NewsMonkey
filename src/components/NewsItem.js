import React from 'react';

const NewsItem = ({ title, description, content, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="card h-100 position-relative w-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="..."
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <span
        className="badge rounded-pill bg-danger position-absolute"
        style={{ top: '10px', right: '10px', zIndex: '1' }}
      >
        {source || "Unknown"}
      </span>
      <div className="card-body d-flex flex-column mt-2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {content && <p className="card-text">{content.slice(0, 100)}...</p>}
        <p className="card-text">
          <small className="text-body-secondary">
            By {!author ? "Unknown" : author} | {date ? new Date(date).toLocaleString() : "Unknown"}
          </small>
        </p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
