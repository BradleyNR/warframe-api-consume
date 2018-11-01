import React, { Component } from 'react';
import './App.css';

import EncounterCard from "./Components/Encounter/EncounterCard";
import StepCard from "./Components/Step/StepCard";


class App extends Component {
  render() {
    console.log("testing");
    return (
      <div className="App">
        <h1>Last Wish</h1>
        <h2>A Destiny 2 raid guide</h2>
        <EncounterCard>
          <p> Encounter One </p>
          <StepCard />
          <StepCard />
        </EncounterCard>
        <EncounterCard>
          <p> Encounter Two </p>
          <StepCard />
          <StepCard />
          <StepCard />
        </EncounterCard>
        <EncounterCard>
          <p> Encounter Three </p>
          <StepCard />
        </EncounterCard>
      </div>
    );
  }
}

export default App;
