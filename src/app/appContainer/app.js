import React, { Component } from 'react';
import Navbar from '../navigation/NavBar';
import FlashMessages from '../flashMessages/components/FlashMessages';

class App extends Component {
  render() { 
    return (
      <div>      
        <Navbar />
        <FlashMessages />
        {this.props.children}
      </div>
    );
  }
}

export default App;
