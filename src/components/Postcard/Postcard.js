import React from 'react' 
import PropTypes from 'prop-types' 
import { withStyles } from 'material-ui/styles' 
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card' 
import Button from 'material-ui/Button' 
import Typography from 'material-ui/Typography' 

const styles = {
  card: {
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
} 

function Postcard(props) {
  const { classes, media, cardtitle, cardtext } = props 
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={media}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {cardtitle}
          </Typography>
          <Typography component="p">
            {cardtext}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
    </div>
  ) 
}

Postcard.propTypes = {
  classes: PropTypes.object.isRequired,
} 

export default withStyles(styles)(Postcard)
// export default Postcard