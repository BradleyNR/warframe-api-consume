import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
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
      fontWeight: theme.typography.fontWeightRegular
    },
    secondary: {
        color: "blue"
    },
    column: {
        marginLeft: "15px"
    }
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
            headerText2,
            leftIcon,
            bodyText
        } = this.props;

        return(
            <div 
            >
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        {leftIcon && leftIcon}
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{headerText}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classNames(classes.heading, classes.secondary)}>{headerText2}</Typography>
                        </div>
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
    headerText2: PropTypes.string,
    bodyText: PropTypes.string.isRequired
};
  
export default withStyles(styles)(StepCard);