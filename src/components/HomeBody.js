import React from "react";
import "../style.css";

function HomeBody() {
  return (
    <div className="home-body ">
      <div className="home-body-content col-4 ">
        <lu>
          <li id="home-body-hi">Hi,</li>
          <li id="home-body-i'mShakila">
            I'm <span className="landing-color1">Shakila,</span>
          </li>
          <li id="home-body-webDeveloper">
            Web <span className="landing-color2">Developer,</span>
          </li>
          <li id="home-body-educator">Educator,</li>
          <li id="home-body-doula">
            <span className="landing-color3">& </span>Doula
          </li>
        </lu>
      </div>
      <div className="home-body-image ">
        <img
          src="https://blossomparenting.com/wp-content/uploads/2020/04/shakila.png"
          alt="Shakila Marando"
        />
      </div>
    </div>
  );
}

export default HomeBody;
