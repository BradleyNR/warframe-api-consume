import React, { Component } from "react";
import SectionCard from "../Components/Section/SectionCard";
import StepCard from "../Components/Step/StepCard";
import CircularProgress from '@material-ui/core/CircularProgress';


const data1 = [
    {
        headerText: "test 1",
        bodyText: "this is the body"
    },
    {
        headerText: "test 2",
        bodyText: "this is the body"
    },
    {
        headerText: "test 3",
        bodyText: "this is the body"
    },
    {
        headerText: "test 4",
        bodyText: "this is the body"
    },
]

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { data } = this.props;

        console.log("PARSE", data);
        return(
            <div
                style={{
                    width: "80%",
                    margin: "auto"
                }}
            >
                {data && (
                    <h1>Warframe Info</h1>
                )}
                {data && data.alerts ? 
                    <React.Fragment>
                        <h4> Alerts </h4>
                        {data.alerts.map(alertObj => {
                            const mission = alertObj.mission;
                            return(
                                <StepCard
                                    headerText={mission.type + "  -  " + mission.node + "  -  " + mission.reward.asString}
                                    bodyText={"Level: " + mission.minEnemyLevel  + " to " +  mission.maxEnemyLevel}
                                />
                            )
                        })}
                    </React.Fragment>
                    : null}
                {!data && (
                    <React.Fragment>
                        <h1 style={{marginTop: "100px"}}> Loading... </h1>
                        <CircularProgress 
                            size={100}
                        />
                    </React.Fragment>
                )}
            </div>
        )
    }
}