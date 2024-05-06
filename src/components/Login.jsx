import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material'; 
import Topbar from '../global/Topbar'; 
import { Link } from 'react-router-dom'; // Import Link for routing

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
                <Card style={{ width: '450px',height: '300px', padding: '20px' }}>
                    <CardContent>
                        <h1 className="text-2xl mb-4">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
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
                            <div className="mb-4">
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
                            <div className="flex items-center justify-end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
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
