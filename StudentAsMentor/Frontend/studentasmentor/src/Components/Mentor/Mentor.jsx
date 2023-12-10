import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBAnimation,
} from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const initialMentors = [
  { name: 'New Name 1', email: 'john@example.com', avatar: 'john.jpg' },
  { name: 'New Name 2', email: 'jane@example.com', avatar: 'jane.jpg' },
  // Add more mentors as needed
];

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol md="6" className="mx-auto">
            <MDBCard>
              <MDBCardBody>
                <h5 className="text-center mb-4 mt-4">Mentor List</h5>
                <MDBListGroup>
                  {initialMentors.map((mentor, index) => (
                    <MDBListGroupItem key={index}>
                      <strong>{mentor.name}</strong> - {mentor.email}
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>

                <hr />

                <h5 className="text-center mb-4 mt-4">Task List</h5>
                <MDBListGroup>
                  {tasks.map((task, index) => (
                    <MDBAnimation key={index} type="fadeIn" className="d-flex justify-content-between align-items-center">
                      <MDBListGroupItem>
                        <MDBIcon icon="tasks" className="mr-2" />
                        {task}
                        <MDBIcon icon="trash" className="clickable ml-2" onClick={() => this.removeTask(index)} />
                      </MDBListGroupItem>
                    </MDBAnimation>
                  ))}
                </MDBListGroup>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <MDBInput
                    label="New Task"
                    icon="plus"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={newTask}
                    onChange={this.handleInputChange}
                  />
                  <MDBBtn color="cyan" onClick={this.addTask}>
                    Add Task
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Mentor;
