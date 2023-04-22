import React from "react";
import Student from "./Student";
import studentData from "./data.json"
import "./Main.css";

class Main extends React.Component {
    render() {
        return (
            <div className="students">
                {studentData.map((student, idx) =>
                    <Student
                        name={student.name}
                        imageUrl={student.imgUrl}
                        student={student}
                        showStudentModal={this.props.showStudentModal}
                        selectedStudent={this.props.selectedStudent}
                        addHeart={this.props.addHeart}
                        key={idx}
                    />
                )}
            </div>
        )
    }
}

export default Main;