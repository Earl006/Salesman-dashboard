import { useState } from 'react';
import { Box, Typography, useTheme, IconButton, Button, InputAdornment, TextField, Slide, FormControl, InputLabel, Select, MenuItem, Modal, Checkbox, FormControlLabel } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import EventIcon from '@mui/icons-material/Event';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const UserManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleEdit = (id) => {
        setSelectedRow(id);
    };

    // Function to handle the delete action
    const handleDelete = (id) => {
        setSelectedRow(id);
    };

    // Function to handle canceling the edit
    const handleCancelEdit = () => {
        setSelectedRow(null);
    };

    // Function to handle saving the edits
    const handleSaveEdit = () => {
        setSelectedRow(null); // Reset selected row after saving
    };

    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      email: '',
      phone: '',
      role: '',
      address: '',
    });

    const handleAddUserClick = () => {
        setShowAddForm(true);
    };
  
    const handleCloseForm = () => {
        setShowAddForm(false);
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            id: '',
            name: '',
            email: '',
            phone: '',
            role: '',
            address: '',
           
        });
        
        handleCloseForm();
    };

    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "NAME", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: "EMAIL", flex: 0.5 },
        { field: "phone", headerName: "PHONE", flex: 0.5 },
        { field: "role", headerName: "ROLE", flex: 0.5 },
        { field: "address", headerName: "ADDRESS", flex: 0.5 },
        { field: "action", headerName: "ACTION", flex: 1, renderCell: (params) => (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={() => handleEdit(params.id)}>
                    <EditNoteIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(params.id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        ) }
    ];

    const rows = []; // Assuming you have data for rows

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5">User Management</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    
                    <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={handleAddUserClick}>
                            Add New Client
                        </Button>
                        <br />
                        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginBottom: '20px' }}>
                        {/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: '20px' }}> */}

            {/* Search icon */}
            <IconButton>
                <SearchIcon />
            </IconButton>
            {/* Calendar icon */}
            <IconButton>
                <EventIcon />
            </IconButton> 
            <IconButton onClick={handleOpenFilter}>
                            <FilterAltIcon />
                        </IconButton>         
            {/* Print icon */}
            <IconButton>
                <PrintIcon />
            </IconButton>
            {/* PDF icon */}
            <IconButton>
                <PictureAsPdfIcon />
            </IconButton>
            {/* Share button */}
            <Button variant="contained" onClick={() => { /* Share functionality */ }}>
                Share
            </Button>
        </Box>
                        <Modal
                open={showAddForm}
                onClose={handleCloseForm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New User
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="FULL NAME"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="PASSWORD"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="ROLE"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="PHONE"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="EMAIL"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="ADDRESS"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="EMPLOYEE NUMBER "
                            name="employeeNumber"
                            value={formData.employeeNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* Add more text fields for other form inputs */}
                        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
                                Add New User
                            </Button>
                            <Button variant="outlined" onClick={handleCloseForm}>Cancel</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <h4>User List Display</h4>
                  
                    <Box sx={{ ml: 'auto' }}>
                    </Box>
                </Box>
                <Box sx={{ width: '95%', height: 'calc(100vh - 260px)', marginTop: '20px' }}>
                    {/* <DataGrid rows={rows} columns={columns} /> */}
                    
                    <DataGrid
                        rows={rows}
                        columns={columns}                        
                        onRowEdit={handleEdit}
                        components={{
                            Toolbar: () => (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                </Box>
                            ),
                        }}
                    />
                </Box>
                {selectedRow && (
    <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">Edit User</Typography>
        <TextField
            label="USER ID"
            defaultValue={selectedRow.userID}
            fullWidth
            margin="normal"
        />
        <TextField
            label="USER NAME"
            defaultValue={selectedRow.userName}
            fullWidth
            margin="normal"
        />
        <TextField
            label="EMAIL"
            defaultValue={selectedRow.email}
            fullWidth
            margin="normal"
        />
        <TextField
            label="PHONE"
            defaultValue={selectedRow.phone}
            fullWidth
            margin="normal"
        />
        <TextField
            label="ADDRESS"
            defaultValue={selectedRow.address}
            fullWidth
            margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button variant="outlined" onClick={handleCancelEdit}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleSaveEdit}>Save</Button>
        </Box>
    </Box>
)}

                <Slide direction="left" in={openFilter} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: '300px',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                            zIndex: 999,
                            padding: '20px',
                        }}
                    >
                        <Typography variant="h6">Filter Options</Typography>
                        <Box sx={{ mt: 2 }}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Filter by Name"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Filter by Category"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Date of Inclusion"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Created On"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Update"
                            />
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={handleCloseFilter}>Clear All</Button>
                            <Button onClick={handleCloseFilter} variant="contained" color="primary">Apply</Button>
                        </Box>
                    </Box>
                </Slide>
            </Box>
        </Box>
    );
};

export default UserManagement;
