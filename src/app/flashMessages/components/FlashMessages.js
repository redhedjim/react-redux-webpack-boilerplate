import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlashMessages extends Component {
  render() { 
    return (
      <div>
        {this.props.messages}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps, null)(FlashMessages);
