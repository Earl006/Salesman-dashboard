import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';


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

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Typography variant="h5">Clients List Display</Typography>
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                    Add New Client
                </Button>
                <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '20px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box>
    );
};

export default Clients;
