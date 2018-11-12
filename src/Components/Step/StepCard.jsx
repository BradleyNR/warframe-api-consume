import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
});


class StepCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { 
            classes,
            headerText,
            bodyText
        } = this.props;

        return(
            <div 
            >
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{headerText}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {bodyText}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

StepCard.propTypes = {
    classes: PropTypes.object.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired
};
  
export default withStyles(styles)(StepCard);