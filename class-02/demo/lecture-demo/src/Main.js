import React from "react";
import Student from "./Student";
import studentData from "./data.json"
import "./Main.css"

class Main extends React.Component {
    render() {
        return (
            <div className="students">
                {studentData.map(student =>
                    <Student
                        name={student.name}
                        imageUrl={student.imgUrl}
                    />
                )}
            </div>
        )
    }
}

export default Main