import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import StudentModal from "./StudentModal";
import studentData from "./data.json";
import { Form } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: '',
      student: {},
      showModal: false,
      studentData: studentData
    }
  }

  addHeart = () => {
    this.setState({
      emoji: this.state.emoji ? '' : '💛' // Ternary - WTF What ? True : False
    })
  }

  showStudentModal = () => {
    this.setState({ showModal: true })
  }

  hideStudentModal = () => {
    this.setState({ showModal: false })
  }

  selectedStudent = (studentObj) => {
    this.setState({ student: studentObj })
  }

  changeTeam = (e) => {
    e.preventDefault();
    let filteredTeam;

    if(e.target.value === 'red'){
      filteredTeam = studentData.filter(student => student.team === 'Red')
    }
    else if(e.target.value === 'blue'){
      filteredTeam = studentData.filter(student => student.team === 'Blue')
    }
    else { 
      filteredTeam = studentData
    }
    this.setState({studentData: filteredTeam})
  }

  render() {
    return (
      <>
        <Header emoji={this.state.emoji} />

        <Form>
          <Form.Group>
            <Form.Label>Choose Team</Form.Label>
            <Form.Select onChange={this.changeTeam}>
              <option value=''>Select a Team</option>
              <option value="red">Red Team</option>
              <option value="blue">Blue Team</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main
          addHeart={this.addHeart}
          showStudentModal={this.showStudentModal}
          selectedStudent={this.selectedStudent}
          studentData={this.state.studentData}
        />
        <StudentModal
          showModal={this.state.showModal}
          hideStudentModal={this.hideStudentModal}
          student={this.state.student}
        />
        <Footer />
      </>
    )
  }
}

export default App;