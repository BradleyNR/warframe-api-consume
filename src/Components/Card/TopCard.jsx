import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: "40%"
  },
  media: {
    height: 250,
  },
};

function TopCard(props) {
  const { classes, cycle, image, imageTitle } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {imageTitle}
          </Typography>
          <Typography component="p">
            {cycle}
          </Typography>
        </CardContent>
    </Card>
  );
}

TopCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopCard);