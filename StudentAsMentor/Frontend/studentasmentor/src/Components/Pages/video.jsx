import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Video = () => {
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol>
          <h2 className="text-center mb-4">Video Gallery</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <video className="m-3" width="400" controls>
              <source src="https://youtu.be/wJOAp2BuRwE?si=wjEXiALTqAnm9XZG" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video className="m-3" width="400" controls>
              <source src="your_video_url_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video className="m-3" width="400" controls>
              <source src="your_video_url_3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video className="m-3" width="400" controls>
              <source src="your_video_url_4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video className="m-3" width="400" controls>
              <source src="your_video_url_5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Video;
