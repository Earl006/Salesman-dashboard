import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";


const TaskManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);

    const columns = [
        { field: "task id", headerName: "TASK ID", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "task name", headerName: "TASK NAME", flex: 0.5 },
        { field: "task type", headerName: "TASK TYPE", flex: 0.5 },
        { field: "task date", headerName: "TASK DATE", flex: 0.5 },
        { field: "task status", headerName: "TASK STATUS", flex: 0.5 },
        { field: "assignee", headerName: "ASSIGNEE", flex: 0.5 },    
    ];

    const rows = []; // Assuming you have data for rows

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Typography variant="h5">Task Management </Typography>
                {/* <Typography variant="subtitle1">User List Display</Typography> */}
                <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '20px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box>
    );
};

export default TaskManagement;
