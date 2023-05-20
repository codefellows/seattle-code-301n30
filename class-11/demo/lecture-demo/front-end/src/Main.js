import React from "react";
import axios from 'axios'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
    }

    componentDidMount(){
        this.fetchDogs();
    }

    async fetchDogs(){
        try{
            const response = await axios.get('http://localhost:3001/getDogs');
            this.setState({dogs: response.data})
        } catch(err){
            console.error(err);
        }
    }


    render() {
        return (
            <>
                {this.state.dogs.length > 0 && this.state.dogs.map((dog, idx) => (
                    <div key={dog._id}>
                        {dog.name} in {dog.location}
                    </div>
                ))}
            </>
        )
    }
}

export default Main;