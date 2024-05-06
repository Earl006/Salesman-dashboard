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
              <p>Are you certain you wish to logout?</p>
              <button onClick={handleLogout}>Log Out</button>
          <button onClick={() => setIsConfirming(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Logout;