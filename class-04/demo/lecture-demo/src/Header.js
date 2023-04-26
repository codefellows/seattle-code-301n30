import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Students of 301 {this.props.emoji}</h1>
            </header>
        )
    }
}

export default Header