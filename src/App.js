import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Header from './Header.js'
import  Three  from './three.js';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/three' component={Three} />
        </Switch>
      </BrowserRouter>
    )
  }
}
  

export default App;
