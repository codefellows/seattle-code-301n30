import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient:'',
      recipes: []
    }
  }


  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;