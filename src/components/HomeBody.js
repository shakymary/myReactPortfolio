import React from "react";
import "../style.css";

function HomeBody() {
  return (
    <div className="home-body ">
      <div className="home-body-content">
        <p id="home-body-webDeveloper">Web Developer</p>
        <p id="home-body-educator">Educator</p>
        <p id="home-body-doula">Doula</p>
      </div>
      <div className="home-body-image">
        <img
          src="https://blossomparenting.com/wp-content/uploads/2020/04/shakila.png"
          alt="Shakila Marando"
        />
      </div>
    </div>
  );
}

export default HomeBody;
