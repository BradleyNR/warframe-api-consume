import React, { Component } from "react";

/**
 * A spoiler wrapper for step text
 * Will display children when clicked, otherwise will be blacked out.
 */
export default class StepCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true
        };
    }

    toggleHidden = () => {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        const { hidden } = this.state;
        const styles = {
            hidden: {
                width: "80%",
                margin: "10px auto",
                padding: "0.25px",
                color: "yellow",
                backgroundColor: "black"
            },
            shown: {
                width: "80%",
                margin: "10px auto",
                padding: "0.25px",
                color: "black",
                backgroundColor: "white"
            }
        }
        return(
            <div 
                style={hidden ? styles.hidden : styles.shown}
                onClick={this.toggleHidden}
            >
            {hidden && (
                <p> Show </p>
            )}
            {!hidden && (
                this.props.children
            )}
            </div>
        )
    }
}