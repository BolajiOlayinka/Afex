import React, { Component } from 'react'
import Logo from "./images/download 1.png";
import {Link} from "react-router-dom";
import man from './images/man.png';

export default class sidebar extends Component {
    render() {
        return (
           <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link to ="/" className="brand-link">
      <img src={Logo} alt="AdminLTE Logo" className="brand-image" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Agent</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={man} className="img-circle elevation-2" alt="User" />
        </div>
        <div className="info">
          <Link to="/" className="d-block">Bolaji Olayinka</Link>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <Link to="/main" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <i className="nav-icon fas fa-users" />
              <p>
                Register Farmers
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li className="nav-item has-treeview">
            <Link to="/manage" className="nav-link">
              <i className="nav-icon fas fa-money" />
              <p>
                Manage Loans 
                
                <span className="badge badge-info right">6</span>
              </p>
            </Link>
           
            </li>
          
        </ul>
    
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
