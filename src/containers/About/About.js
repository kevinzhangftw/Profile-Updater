import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import { connect } from 'react-redux' 

export class About extends Component {
  static propTypes = {
    prop: PropTypes,
  } 

  render() {
    return <div>Moriturus te saluto, but of course, I will never die -kai</div> 
  }
}

const mapStateToProps = state => ({}) 

const mapDispatchToProps = {} 

export default connect(mapStateToProps, mapDispatchToProps)(About) 