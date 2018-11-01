import React, { Component } from "react";

export default class StepCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const styles = {
            hidden: {
                width: "80%",
                margin: "10px auto",
                padding: "0.25px",
                color: "yellow",
                backgroundColor: "black"
            }
        }
        return(
            <div style={styles.hidden}>
                <p> Show </p>
            </div>
        )
    }
}