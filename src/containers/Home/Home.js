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
          <Postcard media="/static/images/kai2017.jpg" cardtitle="2017" cardtext="My portrait shoot in 2017 using cannon t3i 135mm"/>
        </LazyLoad>
        <LazyLoad height={200}>
        <Postcard media="/static/images/filmShoot.jpg" cardtitle="Farewell Filmshoot" cardtext="I played the male lead in short film Farewell for Langara Film Course"/>
        </LazyLoad>
        <LazyLoad height={200}>
        <Postcard media="/static/images/kai2016.jpg" cardtitle="2016" cardtext="My team won the 2017 SOSY LoveHackthon"/>
        </LazyLoad>
        <LazyLoad height={200}>
        <Postcard media="/static/images/kaiTimmies.jpg" cardtitle="by my bae" cardtext="My portrait by my bae on google pixel"/>
        </LazyLoad>
      </MuiThemeProvider>    
    )
  }
}

// connect hooks to higher order component
export default connect()(Home)