import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//lazyload compoents
import LazyLoad from 'react-lazyload'
//compoents
import Postcard from '../../components/Postcard'
// material ui themes
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import {grey, amber, red} from 'material-ui/colors'
// import static images from the image folder
import winningTeam from '../../images/winningTeam.jpg'
import kaiTimmies from '../../images/kaiTimmies.jpg'
import filmShoot from '../../images/filmShoot.jpg'
import kai2016 from '../../images/kai2016.jpg'
import kai2017 from '../../images/kai2017.jpg'

const darkBaseTheme = createMuiTheme({
  palette: {
		primary: grey,
		accent: amber,
		error: red,
		type: 'dark'
	}
 })

export class Home extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(darkBaseTheme)}>
        <LazyLoad height={200}>
          <Postcard />
        </LazyLoad>
        <LazyLoad height={200}>
          <Postcard />
        </LazyLoad>
        <LazyLoad height={200}>
          <Postcard />
        </LazyLoad>
      </MuiThemeProvider>    
    )
  }
}

// connect hooks to higher order component
export default connect()(Home)