import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const UserManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: "Email", flex: 0.5 },
        { field: "phone", headerName: "Phone Number", flex: 0.5 },
        { field: "role", headerName: "Role", flex: 0.5 },
        { field: "address", headerName: "Address", flex: 0.5 },
        { field: "action", headerName: "Action", flex: 1 }
        
    ];

    const rows = []; 

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Typography variant="h5">User Management</Typography>
                <Typography variant="subtitle1">User List Display</Typography>
                <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '15px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box>
    );
};

export default UserManagement;
