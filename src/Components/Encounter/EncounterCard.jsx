import React, { Component } from "react";


export default class EncounterCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const styles = {
            card: {
                width: "70%",
                margin: "50px auto",
                border: "1px solid black",
                backgroundColor: "lightgrey"
            }
        };

        return(
            <div 
                style={styles.card}
            >
                {this.props.children}
            </div>
        )
    }
}