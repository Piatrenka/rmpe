import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    console.log(styles)
    const data = this.props.data

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <h1>RMPE App!!!</h1>
          <h6>Copyright {data.company}, {data.created.getFullYear()}</h6>
        </header>
      </div>
    )
  }
}

export default App