import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './About.css'

const About = () => {
  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center">About Us</MDBCardTitle>
              <MDBCardText>
                Welcome to our platform! We are dedicated to providing high-quality education to empower individuals and transform lives.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="my-5">
        <MDBCol md="12">
          <h2 className="text-center mb-4">Our Team</h2>
          {/* Add multiple images with CSS animation */}
          <div className="team-members">
            {/* Image 1 */}
            <div className="team-member">
              <img src="/images/gatephoto.png" alt="Team Member 1" className="img-fluid rounded-circle" />
              <p className="text-center mt-3">John Doe</p>
            </div>

            {/* Image 2 */}
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" className="img-fluid rounded-circle" />
              <p className="text-center mt-3">Jane Smith</p>
            </div>

            {/* Image 3 */}
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" className="img-fluid rounded-circle" />
              <p className="text-center mt-3">Alex Johnson</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
