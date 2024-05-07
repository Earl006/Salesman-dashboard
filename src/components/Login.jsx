import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material'; 
import Topbar from '../global/Topbar'; 
import { Link } from 'react-router-dom'; // Import Link for routing
import Logo from '../assets/sales-logo.jpeg';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
    };

    return (
        <>
            <Topbar />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '5px'}}>
            <Card style={{ width: '450px', padding: '20px', marginTop: '20px' }}>
    <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src={Logo} alt="Logo" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
            </div>
        <h1 className="text-2xl mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: '20px' }}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    required
                />
            </div>
            {/* Password Input */}
            <div style={{ marginBottom: '20px' }}>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    required
                />
            </div>
            {/* Login Button */}
            <div style={{ marginBottom: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Login
                </Button>
            </div>
        </form>
    </CardContent>
</Card>
            </div>
        </>
    );
};

export default Login;
