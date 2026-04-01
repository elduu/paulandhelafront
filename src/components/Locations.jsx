import React from "react";

export default function Locations() {
  return (
    <section className="map-section" id="locations">
      <div className="section__container">
        <h2 className="section__header">IMPORTANT LOCATIONS</h2>
        <p className="section__description"></p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d504256.91379971115!2d38.7330455!3d9.1085816!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1774871582407!5m2!1sen!2set"
            width="100%"
            height="450"
            style={{ border: 0 }}  // ✅ FIXED
            allowFullScreen        // ✅ FIXED
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // ✅ FIXED
            title="Google Map"
          ></iframe>
        </div>

        {/* Clickable location buttons */}
        <div className="map-labels">
          <a
            href="https://maps.app.goo.gl/TmUzunT5RB14H2fF8"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-groom"
          >
            Groom’s House
          </a>

          <a
            href="https://maps.app.goo.gl/8QZuoGyC4cBsWDYD7"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-bride"
          >
            Bride’s House
          </a>

          <a
            href="https://maps.app.goo.gl/r98Vc4ysGrmufqLY6"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-church"
          >
            Church
          </a>
        </div>
      </div>
    </section>
  );
}