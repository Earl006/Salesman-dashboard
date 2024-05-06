import React from 'react';

const Logout = () => {
    const [isConfirming, setIsConfirming] = useState(false);
  
    const handleLogout = () => {
      // Perform logout logic here
      console.log('Logged out!');
      setIsConfirming(false);
    };