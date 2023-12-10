import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn } from 'mdb-react-ui-kit'; // Import necessary components from mdb-react-ui-kit
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    education: '',
    isStudent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form Data:', formData);
    // Reset the form if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      education: '',
      isStudent: false,
    });
  };

  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center">Register</MDBCardTitle>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  label="Education"
                  id="education"
                  name="education"
                  type="text"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isStudent"
                    name="isStudent"
                    checked={formData.isStudent}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="isStudent">
                    I am a student
                  </label>
                </div>

                <div className="text-center">
                  <MDBBtn color="primary" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
