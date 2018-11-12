import React, { Component } from "react";
import SectionCard from "../Components/Section/SectionCard";
import StepCard from "../Components/Step/StepCard";
import TopCard from "../Components/Card/TopCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    Public,
    OfflineBoltOutlined
} from "@material-ui/icons";


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
        const { data, error } = this.props;

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
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    {/* Fortuna */}
                    {data && data.vallisCycle ? (
                        <TopCard 
                            image={"images/fortuna.jpg"}
                            imageTitle={"Orb Vallis"}
                            cycle={data.vallisCycle.isWarm 
                            ? "Orb Vallis is currently WARM." 
                            : "Orb Vallis is currently COLD."
                        }/>
                    ) : null}
                    {/* Plains of Eidolon */}
                    {data && data.cetusCycle ? (
                        <TopCard 
                            image={"images/eidolon.jpg"}
                            imageTitle={"Plains of Eidolon"}
                            cycle={data.cetusCycle.isDay 
                            ? "It is currently DAY in Cetus." 
                            : "It is currently NIGHT in Cetus."
                        }/>
                    ) : null}
                </div>
                {data && data.alerts ? 
                    <React.Fragment>
                        <h4> Alerts </h4>
                        {data.alerts.map(alertObj => {
                            const mission = alertObj.mission;
                            return(
                                <StepCard
                                    leftIcon={<Public/>}
                                    headerText={mission.type + "  -  " + mission.node}
                                    headerText2={mission.reward.asString}
                                    bodyText={"Level: " + mission.minEnemyLevel  + " to " +  mission.maxEnemyLevel}
                                />
                            )
                        })}
                    </React.Fragment>
                    : null}
                {data && data.fissures ? 
                    <React.Fragment>
                        <h4> Fissures </h4>
                        {data.fissures.map(alertObj => {
                            const mission = alertObj;
                            return(
                                <StepCard
                                    leftIcon={<OfflineBoltOutlined/>}
                                    headerText={mission.missionType + "  -  " + mission.node}
                                    headerText2={mission.tier}
                                    bodyText={"Enemy type: " + mission.enemy}
                                />
                            )
                        })}
                    </React.Fragment>
                    : null}
                {error 
                    ?  <h1> An error occured when querying the warframe API </h1>
                    : !data 
                        ? (
                            <React.Fragment>
                                <h1 style={{marginTop: "100px"}}> Loading API </h1>
                                <CircularProgress 
                                    size={100}
                                />
                            </React.Fragment>
                        ) 
                        : null
                }
            </div>
        )
    }
}