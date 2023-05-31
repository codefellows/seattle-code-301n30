import React from "react";
import axios from 'axios'
import Dogs from "./Dogs";
import AddForm from "./AddForm";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        this.fetchDogs();
    }

    fetchDogs = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/dogs`);
            this.setState({ dogs: response.data })
        } catch (err) {
            console.error(err);
        }
    }

    postDogs = async (newDog) => {
        try{
            const url = `${process.env.REACT_APP_SERVER}/dogs`
            const response = await axios.post(url, newDog);
            this.setState({dogs: [...this.state.dogs, response.data]},() => console.log(this.state.dogs))
            console.log(response.data);
        }
        catch(err){
            console.error(err);
        }
    }

    deleteDog = async (dogToDelete) => {
        const url = `${process.env.REACT_APP_SERVER}/dogs/${dogToDelete._id}`
        await axios.delete(url);
        const updatedDogs = this.state.dogs.filter(dog => dog._id !== dogToDelete._id);
        this.setState({dogs: updatedDogs});
    }

    updateDog = async (dogToUpdate) => {
        const url = `${process.env.REACT_APP_SERVER}/dogs/${dogToUpdate._id}`
        await axios.put(url, dogToUpdate);
        const updatedDogArr = this.state.dogs.map(oldDog => oldDog._id === dogToUpdate._id ? dogToUpdate : oldDog);
        this.setState({dogs: updatedDogArr})
    }


    render() {
        return (
            <>
                <AddForm postDogs={this.postDogs}/>
                {this.state.dogs.length > 0 &&
                    <Dogs 
                    dogs={this.state.dogs}
                    deleteDog={this.deleteDog}
                    updateDog={this.updateDog}
                    />
                }
            </>
        )
    }
}


export default Main;