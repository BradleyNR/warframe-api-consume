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
          this.setState({data: fetchData})
        })  
        .catch((err) => {
          console.log("API FETCH ERROR:", err);
        })
    }, 1000);

    this.state = {
      data: null
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div 
        className="App"
      >
        <Main
          data={data}
        />
      </div>
    );
  }
}

export default App;
