import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";

const UserManagement = () => {
    const theme = useTheme();
    const colorMode = tokens(theme.palette.colorMode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "role", headerName: "Role", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "action", headerName: "Action", flex: 1 }
    ];

    return (
        <Box>
            <Typography variant="h4">User Management</Typography>
            <Typography variant="subtitle1">User List Display</Typography>
            <Box>
                <DataGrid rows={''} columns={columns} />
            </Box>
        </Box>
    );
};

export default UserManagement;
