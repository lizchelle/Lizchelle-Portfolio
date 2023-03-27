import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100090759032471">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/lizchelle.dev/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/elizabete-de-freitas/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Lizchelle</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate about technology 💖",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "Design Solutions 🎨",
                    2000,
                    "Life-long learner 📚",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                "Bringing Beautifully Functional Apps to Life - Full-Stack
                Expertise at Your Service"
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe( )}> Let's Make Magic </button>
            <a href="Resume.pdf" download="Lizchelle Resume.pdf">
              <button className="btn highlighted-btn">Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
