import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.css';

class Sidebar extends Component {

  cancelTouched = () => {
    this.props.onChange();
  }

  render() {
    const sidebarStyle = this.props.value ? {} : {display : 'none'};
    return (
      <div className="side-bar" style={sidebarStyle}>
        <img className="cancel-button" alt="cancel" src="https://image.flaticon.com/icons/svg/149/149158.svg" onClick={this.cancelTouched} />
        <Link className="link" to="/"><div className="sidebar-item">Home</div></Link>
        <Link className="link" to="/music"><div className="sidebar-item">Music</div></Link>
        <Link className="link" to="/movies"><div className="sidebar-item">Movies</div></Link>
        <Link className="link" to="/technology"><div className="sidebar-item">Technology</div></Link>
      </div>
    )
  }
}

Sidebar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool
}

export default Sidebar;