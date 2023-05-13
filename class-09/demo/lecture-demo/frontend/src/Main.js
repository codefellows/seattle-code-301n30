import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  componentDidMount = async () => {
    const API = 'http://localhost:3001';
    const jobs = await axios.get(`${API}/jobs`);
    this.setState({ jobs: jobs.data })
  }

  render() {
    return(
      <>
        {this.state.jobs.length > 0 && this.state.jobs.map((job, idx) => (
          <Job  job={job} key={idx}/>
        ))}
      </>
    )
  }
}

// Component within same file its being used
// Does not need to be imported or exported
// Pros still need to be passed down from the parent Component
class Job extends React.Component {
  render() {
      const { job } = this.props;
      return (
          <div>
              <h3>Vault Tec</h3>
              <h2><a href={job.url}>{job.name}</a></h2>
              <p>{job.description}</p>
              <p>{job.location}</p>
          </div>
      )
  }
}

export default Main;