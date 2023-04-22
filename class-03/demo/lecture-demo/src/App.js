import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import StudentModal from "./StudentModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: '',
      student: {},
      showModal: false
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
    this.setState({showModal: false})
  }

  selectedStudent = (studentObj) =>{
    this.setState({student: studentObj})
  }

  render() {
    return (
      <>
        <Header emoji={this.state.emoji} />
        <Main
          addHeart={this.addHeart}
          showStudentModal={this.showStudentModal}
          selectedStudent={this.selectedStudent}
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