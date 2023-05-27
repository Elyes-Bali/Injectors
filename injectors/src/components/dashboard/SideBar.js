import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
const SideBar = () => {
  return (
    // <div className="sides">

    //   <aside className="main-sidebar sidebar-dark-primary elevation-4">
    //     {/* Brand Logo */}
    //     <a href="/" className="brand-link">

    //       <span className="brand-text font-weight-light">INJECTORS</span>
    //     </a>
    //     {/* Sidebar */}
    //     <div className="sidebar">
    //       {/* Sidebar user panel (optional) */}
    //       <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    //         <div className="">
    //           <a  className="d-block">
    //            ADMIN
    //           </a>
    //         </div>
    //       </div>
    //       {/* SidebarSearch Form */}

    //       {/* Sidebar Menu */}
    //   <nav className="mt-2">
    //     <ul
    //       className="nav nav-pills nav-sidebar flex-column"
    //       data-widget="treeview"
    //       role="menu"
    //       data-accordion="false"
    //     >
    //       {/* Add icons to the links using the .nav-icon class
    //  with font-awesome or any other icon font library */}
    //       <li className="nav-item menu-open">
    //       <Link to="/dashboard">
    //         <a  className="nav-link active">
    //           <i className="nav-icon fas fa-database" />
    //           <p>
    //             Data

    //           </p>
    //         </a>
    //         </Link>
    //       </li>

    //       <li className="nav-item">
    //         <a href="#" className="nav-link">
    //           <i className="nav-icon fas fa-copy" />
    //           <p>
    //             ALL USERS
    //             <i className="fas fa-angle-left right" />
    //           </p>
    //         </a>
    //         <ul className="nav nav-treeview">
    //           <li className="nav-item">
    //             <Link to="/usersdb">
    //               <a className="nav-link">
    //                 <i className="far fa-circle nav-icon" />
    //                 <p>Patients</p>
    //               </a>
    //             </Link>
    //           </li>

    //         </ul>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#" className="nav-link">
    //           <i className="nav-icon fas fa-chart-pie" />
    //           <p>
    //             DATA
    //             <i className="right fas fa-angle-left" />
    //           </p>
    //         </a>
    //         <ul className="nav nav-treeview">

    //           <li className="nav-item">
    //           <Link to="/chart">
    //             <a  className="nav-link">
    //               <i className="far fa-circle nav-icon" />
    //               <p>IMC</p>
    //             </a></Link>
    //           </li>
    //         </ul>
    //       </li>

    //       <li className="nav-header">MESSAGES</li>

    //       <li className="nav-item">
    //       {/* <Link to="/messdb"> */}
    //         <a  className="nav-link">
    //           <i className="nav-icon far fa-envelope" />
    //           <p>
    //             Mailbox
    //             <i className="fas fa-angle-left right" />
    //           </p>
    //         </a>
    //         <ul className="nav nav-treeview">
    //           <li className="nav-item">
    //             <Link to="/messdb">
    //             <a  className="nav-link">
    //               <i className="far fa-circle nav-icon" />
    //               <p>Inbox</p>
    //             </a></Link>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </nav>
    //       {/* /.sidebar-menu */}
    //     </div>
    //     {/* /.sidebar */}
    //   </aside>
    // </div>
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-center">
          <ul className="list">
            
            <li className="list-item">
            <a href="/dashboard" className="nav-link">
              <i
                style={{ fontSize: "20px" }}
                className="list-item-icon fas fa-home"
              />
              <span className="list-item-text">HOME</span>
              </a>
            </li>


            <li className="list-item">
              <a href="/usersdb" className="nav-link">
                <i className="list-item-icon fas fa-copy" />
                <span className="list-item-text">ALL USERS</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/chart" className="nav-link">
                <i className="list-item-icon fas fa-chart-pie" />
                <span className="list-item-text">DATA</span>
              </a>
            </li>


            <li className="list-item">
              <a href="/messdb" className="nav-link">
                <i className="list-item-icon far fa-envelope" />
                <span className="list-item-text">MAILBOX</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
