import React from "react";
import Student from "./Student";


class Main extends React.Component{
    render(){
        return(
            <>
                <p>Hello World!</p>
                <Student name={'Lacey'}/>
                <Student name={'Brandon'}/>
                <Student name={'Emily'}/>
            </>
        )
    }
}

export default Main