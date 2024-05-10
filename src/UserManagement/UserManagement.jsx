import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Typography, useTheme, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";




const UserManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
      
        const handleAddUser = (user) => {
          setUsers([...users, user]);
          setShowForm(false);
        };
      
        const handleEditUser = (index, updatedUser) => {
          const updatedUsers = [...users];
          updatedUsers[index] = updatedUser;
          setUsers(updatedUsers);
        };
      
        const handleDeleteUser = (index) => {
          const updatedUsers = users.filter((_, i) => i !== index);
          setUsers(updatedUsers);
        };

        const handleAddUserClick = () => {
            setShowForm(true);
        };
    
        const handleCloseForm = () => {
            setShowForm(false);
        };
        const handleSaveUser = () => {
            console.log('Saving user...');
          };
          
    

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: "Email", flex: 0.5 },
        { field: "phone", headerName: "Phone Number", flex: 0.5 },
        { field: "role", headerName: "Role", flex: 0.5 },
        { field: "address", headerName: "Address", flex: 0.5 },
        
       { field: "action",
        headerName: "Action",
        flex: 0.5,
        renderCell: (params) => (
          <Box>
            <IconButton
              onClick={() => handleEditUser(params.rowIndex, params.row)}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteUser(params.rowIndex)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    ];

    const rows = []; 

    return (
            <div> 
                <Button variant="contained" color="primary" onClick={handleAddUserClick}>
                    Add New User
                </Button>
                <Dialog open={showForm} onClose={handleCloseForm}>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogContent>
                        <Form /> {/* Render your form component here */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseForm} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSaveUser} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>


        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Typography variant="h5">User Management</Typography>
                <Typography variant="subtitle1">User List Display</Typography>
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
            
          <IconButton>
          <NotificationsIcon />
          </IconButton>
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                    Add New User
                </Button>
                {showForm && <Form onAddUser={handleAddUser} />}
                <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '15px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box>
        </div>
    );
};

export default UserManagement;
