import React from 'react';

const About = () => {
  return (
    <div className="container my-5" style={{ marginTop: '90px' }}>
      <h1 className="text-center mb-4">About NewsMonkey</h1>
      <div className="card p-4 shadow-sm border-0">
        <p className="fs-5">
          <strong>NewsMonkey</strong> is a modern news application built using React.js. It fetches the latest and most reliable news headlines using the <strong>NewsAPI</strong> and displays them in a simple, elegant, and responsive interface.
        </p>
        <p className="fs-5">
          The app allows you to explore news across multiple categories such as <em>Business</em>, <em>Entertainment</em>, <em>Health</em>, <em>Science</em>, <em>Sports</em>, and <em>Technology</em>. You can easily navigate between categories through the top navigation bar.
        </p>
        <p className="fs-5">
          It also features <strong>infinite scrolling</strong> — as you scroll down, new articles automatically load without needing to refresh or switch pages. Each article card provides the title, summary, publication details, and a direct link to the full story.
        </p>
        <p className="fs-5">
          The project demonstrates how to use APIs, manage state using React Hooks, and build a clean UI with reusable components and responsive design principles.
        </p>
        <p className="text-muted mt-4 mb-0">
          <strong>Developer:</strong> Baikani Shiva
          <br />
          <strong>Framework:</strong> React.js
          <br />
          <strong>API Used:</strong> NewsAPI.org
        </p>
      </div>
    </div>
  );
};

export default About;
