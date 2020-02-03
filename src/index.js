import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'

const data = {
  company: "Vebkomas",
  created: new Date()
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'));
