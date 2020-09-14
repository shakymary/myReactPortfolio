import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

const CardExample = () => {
  return (
    <div className="container">
      <MDBRow className="">
        <MDBCol col="4">
          <MDBCard>
            <MDBCardImage
              className="blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded"
              tag="div"
            >
              <h2>About Me</h2>
            </MDBCardImage>
            <MDBCardBody cascade className="text-center">
              <MDBCardText className="biography-body">
                I am a Full-Stack web developer. My curiosity and passion for
                learning fuels me to persue many interests, hobbies and areas of
                studies. I am easily inspired and willing to follow my heart's
                desires wherever they may lead me. I am also a founder of Doulas
                By The Bay LLC and Blossom Parenting LLC. My background working
                as a doula has helped me understand how to best support and
                educate Doulas and new parents and lead an incredible team of
                birth and postpartum professionals that is passionate about
                supporting families in our community. My educational videos have
                been viewed by tens of thousands of families on YouTube,
                Instagram, Facebook and LinkedIn platforms. I find it very
                rewarding to learn new skills and work hard to provide superior
                service in my personal and professional life.
              </MDBCardText>
              <hr />
              <div className="text-center">
                <p>
                  “Curiosity is more important than knowledge.” ― Albert
                  Einstein
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CardExample;
