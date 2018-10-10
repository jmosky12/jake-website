import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Technology from './Components/Technology/Technology';
import Music from './Components/Music/Music';
import Movies from './Components/Movies/Movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route name="home" exact path="/" component={Home} />
          <Route name="music" exact path="/music" component={Music} />
          <Route name="movies" exact path="/movies" component={Movies} />
          <Route name="technology" exact path="/technology" component={Technology} />
        </div>
      </Router>
    );
  }
}

export default App;
