import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import AppRouter from './routers/AppRouter';



export class App extends Component {
  render() {
    return (
    <Fragment>
      <AppRouter/>
    </Fragment>
    )
  }
}

export default App;


ReactDOM.render(<App/>, document.querySelector("#root"));