import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//lazyload compoents
import LazyLoad from 'react-lazyload';
// material ui themes
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//compoents
import { Post } from '../../components';
// import static images from the image folder
import winningTeam from '../../images/winningTeam.jpg';
import kaiTimmies from '../../images/kaiTimmies.jpg';
import filmShoot from '../../images/filmShoot.jpg';
import kai2016 from '../../images/kai2016.jpg';
import kai2017 from '../../images/kai2017.jpg';

export class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <LazyLoad height={200}>
          <Post media={kai2017} cardTitle="2017" cardText="My portrait shoot in 2017 using cannon t3i 135mm"/>
        </LazyLoad>
        <LazyLoad height={200}>
          <Post media={filmShoot} cardTitle="Farewell Filmshoot" cardText="I played the male lead in short film Farewell for Langara Film Course"/>
        </LazyLoad>
        <LazyLoad height={200}>
          <Post media={kai2016} cardTitle="2016" cardText="My portrait shoot in 2016 using iphone6 front camera"/>
        </LazyLoad>
        <LazyLoad height={200}>
          <Post media={winningTeam} cardTitle="Leading Team" cardText="My team won the 2017 LoveHackthon"/>
        </LazyLoad>
        <LazyLoad height={200}>
          <Post media={kaiTimmies} cardTitle="By my bae" cardText="My portrait by my bae on google pixel"/>
        </LazyLoad>
      </MuiThemeProvider>      
    );
  }
}

// connect to store
const mapStateToProps = state => ({
});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({});

// connect hooks to higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Home);