import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  showList = async () => {
    try{
      const url = `${process.env.REACT_APP_SERVER}/shoppingList?listType=supplies`
      const response = await axios.get(url);
      this.setState({shoppingList: response.data},
        () => console.log(this.state.shoppingList)
        )
    }
    catch(error){
      console.error(error.message);
    }
  }

  render(){
    return(
    <>
      <p>Hello World!</p>
      <Button onClick={this.showList}>Show me my Lists</Button>

      {this.state.shoppingList.length > 0 && 
        this.state.shoppingList.map(item => 
          <>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </>
          )
      }
    </>
    )

  }
}

export default App;