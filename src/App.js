import React, { Component } from 'react';
import Main from "./Views/Main";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      fetch("https://api.warframestat.us/pc")
        .then((resp) => resp.json())
        .then((fetchData) => {
          console.log("FETCH DATA", fetchData);
          this.setState({data: fetchData, error: false});
        })  
        .catch((err) => {
          console.log("API FETCH ERROR:", err);
          this.setState({error: true});
        })
    }, 1000);

    this.state = {
      data: null,
      error: false
    }
  }

  render() {
    const { data, error } = this.state;

    return (
      <div 
        className="App"
      >
        <Main
          data={data}
          error={error}
        />
      </div>
    );
  }
}

export default App;
