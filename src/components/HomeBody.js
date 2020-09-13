import React from "react";
import "../style.css";

function HomeBody() {
  return (
    <div className="home-body ">
      <div className="home-body-content ">
        <lu>
          <li id="home-body-hi">Hi,</li>
          <li id="home-body-i'mShakila">I'm Shakila,</li>
          <li id="home-body-webDeveloper">Web Developer,</li>
          <li id="home-body-educator">Educator,</li>
          <li id="home-body-doula">& Doula</li>
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
