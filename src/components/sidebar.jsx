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
        // Add cases for other pages
        default:
          return null;
      }
    };