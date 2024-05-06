import React, { useState } from 'react';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';

const Sidebar = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
  
    const renderPage = () => {
      switch (currentPage) {
        case 'dashboard':
          return <Dashboard />;
        case 'user-management':
          return <UserManagement />;
        case 'dashboard':
          return <Clients />;
        case 'dashboard':
          return <Products />;
        case 'dashboard':
          return <TaskManagement />;
        case 'dashboard':
          return <VisitPlanning />;
        case 'dashboard':
          return <Performance />;
        case 'dashboard':
          return <Feedback />;
        case 'dashboard':
          return <Orders />;
        default:
          return null;
      }
    };
    return (
        <div className="sidebar">
          <button onClick={() => setCurrentPage('dashboard')}>
            <i className="fa fa-dashboard"></i> Dashboard
          </button>
          <button onClick={() => setCurrentPage('user-management')}>
            <i className="fa fa-users"></i> User Management
          </button>
          {}
          <button onClick={() => setCurrentPage('logout')}>
            <i className="fa fa-sign-out"></i> Logout
          </button>
          <div className="content">{renderPage()}</div>
        </div>
      );
    };
    
    export default Sidebar;