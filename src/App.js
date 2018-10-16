import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Technology from './Components/Technology/Technology';
import Music from './Components/Music/Music';
import Movies from './Components/Movies/Movies';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar : false
    };
  }

  hideSideBar = () => {
    console.log("clicked hide!");
    this.setState({showSideBar : false});
  }

  showSideBar = () => {
    console.log("clicked show!");
    this.setState({showSideBar : true});
  }

  render() {
    const showMenuButton = this.state.showSideBar ? {display: 'none'} : {};
    const showMenuOverlay = this.state.showSideBar ? {} : {display: 'none'};
    return (
      <Router>
        <div className="outer-container">
          <div className="menu-container" style={showMenuOverlay}>
            <Sidebar value={this.state.showSideBar} onChange={this.hideSideBar} />
            <div className="transparent-view" onClick={this.hideSideBar} />
          </div>
          <div className="content-container">
            <img className="menu" src="https://image.flaticon.com/icons/svg/462/462998.svg" alt="menu" style={showMenuButton} 
              onClick={this.showSideBar} />
            <Route name="home" exact path="/" component={Home} />
            <Route name="music" exact path="/music" component={Music} />
            <Route name="movies" exact path="/movies" component={Movies} />
            <Route name="technology" exact path="/technology" component={Technology} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
