import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }

const Postcard = (props)=> {
    return (
        <Card>
        <CardContent>
          <Typography component="p">
            Word of the Day
          </Typography>
        </CardContent>
        </Card>
    )
}




export default Postcard