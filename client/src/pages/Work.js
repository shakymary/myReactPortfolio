import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "../style.css";

const MyListGroup = () => {
  return (
    <MDBContainer className="work-container">
      <MDBListGroup style={{ width: "50rem" }}>
        <MDBListGroupItem href="#" active>
          <h2 className="pages-title">My Work</h2>
        </MDBListGroupItem>
        <MDBListGroupItem href="https://github.com/shakymary">
          Full-Stack Web Developer
        </MDBListGroupItem>
        <MDBListGroupItem href="https://www.instagram.com/blossomparenting/">
          Doulas & New Parent Educator
        </MDBListGroupItem>
        <MDBListGroupItem href="https://doulasbythebay.com/my-team.html">
          Birth & Postpartum Doula{" "}
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
};

export default MyListGroup;
