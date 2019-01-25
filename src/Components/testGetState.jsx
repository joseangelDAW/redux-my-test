import React, { Component } from 'react';

class TestGetState extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="button" value="Get State" onClick={() => {
        const stateText = localStorage.getItem('stateText')
        console.log(stateText)
      }}/>
    )
  }
}

export default TestGetState