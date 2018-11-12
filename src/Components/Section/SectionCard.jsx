import React, { Component } from "react";
import PropTypes from "prop-types";
import StepCard from "../Step/StepCard";


export default class SectionCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {
            data
        } = this.props;
        return(
            <div 
            >
             {data.map(obj => {
                 return(
                    <StepCard
                        headerText={obj.headerText}
                        bodyText={obj.bodyText}
                    />
                 )
             })}
            </div>
        )
    }
}

SectionCard.propTypes = {
    data: PropTypes.array.isRequired
};