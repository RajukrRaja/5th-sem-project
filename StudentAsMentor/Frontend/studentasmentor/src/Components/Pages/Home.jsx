import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <MDBContainer className="my-5 bg-white">
      <div className="poster1">
        <img src="https://www.mentalup.co/img/blog/the-importance-of-education.jpg" alt="" />
      </div>
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center">Welcome to Our Education Platform</MDBCardTitle>
              <MDBCardText>
                Explore a world of knowledge and enhance your learning experience with our education platform.
              </MDBCardText>
              <MDBBtn color="primary" href="../Navbar1">Browse Courses</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Featured Courses Section */}
      <MDBRow className="my-5">
        <MDBCol md="12">
          <h2 className="text-center mb-4">Featured Courses</h2>
          {/* Add your featured courses here */}
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Course Title</MDBCardTitle>
              <MDBCardText>
                Description of the featured course. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </MDBCardText>
              <MDBBtn color="primary" href="/courses/course-id">Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
