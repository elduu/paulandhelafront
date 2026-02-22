import React from "react";

const Portfolio = () => {
  return (
    <div className="section__container portfolio__container">
      <h2 className="section__header">~ SAVE THE DATE ~</h2>
      <div className="portfolio__grid">
        {[1].map((num) => (
          <div key={num} className="portfolio__card">
               {/* <img src={`assets/imagecAL.jpg`} alt="portfolio" /> */}
            <img src={`assets/image-${num}.jpg`} alt="portfolio" />
            <div className="portfolio__content">
              <button className="btn">PAUL AND HELA</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
