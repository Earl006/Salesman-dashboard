

import { useState } from 'react';
import { Box, Typography, useTheme, IconButton, Button, InputAdornment, TextField, Slide, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';

const handleAddUser = () => {
    // Add your logic here
}

const Clients = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);

    const columns = [
        { field: "name", headerName: "NAME", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "address", headerName: "ADDRESS", flex: 0.5 },
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "contact", headerName: "CONTACT", flex: 0.5 },
        { field: "preferred brand", headerName: "PREFERRED BRAND", flex: 0.5 },
        { field: "salesman as", headerName: "SALESMAN AS", flex: 0.5 },
        { field: "rating", headerName: "RATING", flex: 1 },
        { field: "qr", headerName: "QR", flex: 1 }
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
                    <Typography variant="h5">Client List Display</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={handleAddUser}>
                            Add New Client
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
                        All Clients
                    </Button>
                    <TextField
                        placeholder=" New Suggestion Clients"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box sx={{ ml: 'auto' }}>
                        <IconButton onClick={handleOpenFilter}>
                            <FilterAltIcon />
                        </IconButton>
                        <IconButton>
                            <DownloadIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ width: '95%', height: 'calc(100vh - 260px)', marginTop: '20px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
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
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel id="filter-address-label">Filter by Address</InputLabel>
                                <Select labelId="filter-address-label" id="filter-address" value={''} onChange={() => {}}>
                                    <MenuItem value="">All</MenuItem>
                                    
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel id="filter-brand-label">Filter by Brands</InputLabel>
                                <Select labelId="filter-brand-label" id="filter-brand" value={''} onChange={() => {}}>
                                    <MenuItem value="">All</MenuItem>
                                  
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="filter-status-label">Filter by Status</InputLabel>
                                <Select labelId="filter-status-label" id="filter-status" value={''} onChange={() => {}}>
                                    <MenuItem value="">All</MenuItem>
    
                                </Select>
                            </FormControl>
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

export default Clients;

