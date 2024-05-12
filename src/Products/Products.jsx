import { Box, Typography, useTheme, IconButton, Button, Modal, FormControlLabel, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import React, { useState } from 'react';
import ProductDetailsForm from "../components/ProductDetailsForm";

const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleRowClick = (params) => {
        setSelectedRow(params.id);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const columns = [
        { field: "img", headerName: "IMG", flex: 0.6, cellClassName: "name-column--cell" },
        { field: "ref.number", headerName: "REF.NUMBER", flex: 0.7 },
        { field: "name", headerName: "NAME", flex: 0.5 },
        { field: "price", headerName: "PRICE", flex: 0.5 },
        { field: "availability", headerName: "AVAILABILITY", flex: 0.7 },
        { field: "quantity", headerName: "QUANTITY", flex: 0.5 },
        { field: "variations", headerName: "VARIATIONS", flex: 0.6 },
        {
            field: "",
            headerName: "",
            flex: 1.3,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button variant="outlined" onClick={() => handleEdit(params.id)} sx={{ p: '8px', minWidth: '90px' }}>
        Edit Variation
    </Button>
    <IconButton>
        <EditNoteIcon />
    </IconButton>
    <IconButton onClick={() => handleDelete(params.id)}>
        <DeleteIcon />
    </IconButton>
    </Box>

            )
        },
    ];

    const rows = [{ id: 1, img: 'img1.jpg', 'ref.number': '123', name: 'Product A', price: '$10', availability: 'In stock', quantity: 100, variations: 'Variation A' },
    { id: 2, img: 'img2.jpg', 'ref.number': '456', name: 'Product B', price: '$15', availability: 'Out of stock', quantity: 0, variations: 'Variation B' },]; // Assuming you have data for rows

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                {/* Header with Notification icon and Add New Client button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5">Product List </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                            Add New Client
                        </Button>            
                    </Box>                    
                </Box>
                <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>Product List</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginBottom: '20px' }}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <FilterAltIcon />
                    </IconButton>
                    <IconButton>
                        <DownloadIcon />
                    </IconButton>
                </Box>
                {/* DataGrid for displaying products */}
                <Box sx={{ width: '95%', height: 'calc(100vh - 180px)', marginTop: '20px' }}>
                    <DataGrid rows={rows} columns={columns} onRowClick={handleRowClick} />
                </Box>
                
            <ProductDetailsForm open={openModal} handleClose={handleCloseModal} /> 
                
            </Box>
        </Box>
    );
};

export default Products;
