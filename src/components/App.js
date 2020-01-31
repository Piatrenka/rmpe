import React, { Component } from 'react';

class App extends Component {
  render() {
    
    const data = this.props.data

    return (
      <div>
        <h1>RMPE App</h1>
        <h6>Copyright {data.company}, {data.created.getFullYear()}</h6>
      </div>
    )
  }
}

export default App