import React, { Component } from 'react';
import './App.css';

import EncounterCard from "./Components/Encounter/EncounterCard";
import StepCard from "./Components/Step/StepCard";


class App extends Component {
  render() {
    return (
      <div 
        className="App"
        style={{
          // backgroundImage: `url(images/lastwishbg.jpg)`,
          // backgroundSize: "contain"
        }}
      >
        <p>Last Wish</p>
        <p>A Destiny 2 raid guide</p>
        <EncounterCard>
          <p> Encounter One </p>
          <StepCard>
            <p> this is the text for the first step, time to test!!! </p>
            <p> this is the text for the first step, time to test!!! </p>
            <p> this is the text for the first step, time to test!!! </p>
          </StepCard>
          <StepCard>
            <p> this is the text for the second step, time to test. Look at that BEEBY!!!! </p>
          </StepCard>
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
