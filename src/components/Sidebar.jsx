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
  } 
    export default Sidebar;