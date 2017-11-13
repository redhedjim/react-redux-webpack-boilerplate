import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../flashMessages/actions/flashMessagesActions';

class NavBar extends Component {
  componentWillMount() {
    this.props.addMessage();
  }
  render() { 
    return (
      <h1>Navigation bar goes here.</h1>
    );
  }
}
  
export default connect(null, { addMessage })(NavBar);
