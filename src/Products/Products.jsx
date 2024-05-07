import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";


const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);

    const columns = [
        { field: "img", headerName: "IMG", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "ref.number", headerName: "REF.NUMBER", flex: 0.5 },
        { field: "name", headerName: "NAME", flex: 0.5 },
        { field: "price", headerName: "PRICE", flex: 0.5 },
        { field: "availability", headerName: "AVAILABILITY", flex: 0.5 },
        { field: "quantity", headerName: "QUANTITY", flex: 0.5 },
        { field: "variations", headerName: "VARIATIONS", flex: 1 },
        
    ];

    const rows = []; // Assuming you have data for rows

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Typography variant="h5">Product List </Typography>
                {/* <Typography variant="subtitle1">User List Display</Typography> */}
                <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '20px' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box>
    );
};

export default Products;
