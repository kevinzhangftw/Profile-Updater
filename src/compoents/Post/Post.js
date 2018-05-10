import React from 'react'
import {Card, CardMedia, CardTitle, CardText, CardHeader, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Post = ({media, cardTitle, cardText}) => 
    <Card>
        {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      showExpandableButton={true}
        /> */}
        <CardMedia>
            <img src={media} alt="" />
        </CardMedia>
        <CardTitle title={cardTitle} showExpandableButton={true}/>
        <CardText expandable={true}>
            {cardText} 
        </CardText>
        {/* <CardActions>
            <FlatButton label="Give" />
        </CardActions> */}
    </Card>     


export default Post