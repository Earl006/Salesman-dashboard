import React from 'react';

const Logout = () => {
    const [isConfirming, setIsConfirming] = useState(false);
  
    const handleLogout = () => {
      // Perform logout logic here
      console.log('Logged out!');
      setIsConfirming(false);
    };
    return (
        <div>
          <button onClick={() => setIsConfirming(true)}>Logout</button>
          {isConfirming && (
            <div>
              <p>Are you sure you want to logout?</p>