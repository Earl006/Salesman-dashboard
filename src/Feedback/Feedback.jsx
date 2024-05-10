// import React from 'react';
// import { Box, Typography, IconButton, Button } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import DownloadIcon from '@mui/icons-material/Download';
// import Sidebar from "../components/Sidebar";
// import NotificationsIcon from '@mui/icons-material/Notifications';
// //import { DataGrid } from "@mui/x-data-grid";

// const Feedback = () => {
//   return (
//     <div>
//       <Box sx={{ display: 'flex' }}>
//         <Sidebar /> 
//         </Box>
//       <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
//         <Typography variant="h4">Salesman Feedback & Reports</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Box sx={{ flex: 1, marginLeft: '650px', padding: '20px' }}>
//           <IconButton>
//           <NotificationsIcon />
//           </IconButton>
//           <Button variant="contained" color="primary">
//             + Feedback & Reports
//           </Button>
//         </Box>
//       </Box>
//       </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="h5">Feedback Actions</Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//             <IconButton>
//               <FilterAltIcon />
//             </IconButton>
//             <IconButton>
//               <DownloadIcon />
//             </IconButton>
//           </Box>
//         </Box>
//         <Box>
         
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//             <Typography variant="subtitle1">Complaint</Typography>
//             <Button variant="contained" color="primary">
//               Take Action
//             </Button>
//           </Box>
          
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//             <Typography variant="subtitle1">Product Defect</Typography>
//             <Button variant="contained" color="primary">
//               Take Action
//             </Button>
//           </Box>
          
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//             <Typography variant="subtitle1">Client Misbehaviour</Typography>
//             <Button variant="contained" color="primary">
//               Take Action
//             </Button>
//           </Box>
          
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//             <Typography variant="subtitle1">Doctor Recommendation</Typography>
//             <Button variant="contained" color="primary">
//               Take Action
//             </Button>
//           </Box>
         
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//             <Typography variant="subtitle1">Others</Typography>
//             <Button variant="contained" color="primary">
//               Take Action
//             </Button>
//           </Box>
//         </Box>
//         <Box sx={{ width: '95%', height: 'calc(100vh - 128px)', marginTop: '15px' }}>
//        </Box> 
//     </div>
//   );
// };

// export default Feedback;




import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import Sidebar from "../components/Sidebar";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Feedback = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    feedback: ''
  });

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      date: '',
      time: '',
      feedback: ''
    });
    handleCloseForm();
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar /> 
      </Box>
      <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
        <Typography variant="h4">Salesman Feedback & Reports</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: 1, marginLeft: '650px', padding: '20px' }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Button variant="contained" color="primary" onClick={handleOpenForm}>
              + Feedback & Reports
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h5">Feedback Actions</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="subtitle1">Complaint</Typography>
            <Button variant="contained" color="primary">
              Take Action
            </Button>
          </Box>
          {/* Add similar sections for other feedback categories */}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <Typography variant="subtitle1">Product Defect</Typography>
             <Button variant="contained" color="primary">
               Take Action
             </Button>
           </Box>
          
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <Typography variant="subtitle1">Client Misbehaviour</Typography>
             <Button variant="contained" color="primary">
               Take Action
             </Button>
           </Box>
          
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <Typography variant="subtitle1">Doctor Recommendation</Typography>
             <Button variant="contained" color="primary">
               Take Action
             </Button>
           </Box>
         
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <Typography variant="subtitle1">Others</Typography>
            <Button variant="contained" color="primary">
              Take Action
             </Button>
           </Box>
        </Box>
        {isFormOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              zIndex: 999
            }}
          >
            <Typography variant="h6">Feedback Form</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}
              >
                <Button variant="outlined" onClick={handleCloseForm}>Cancel</Button>
                <Button type="submit" variant="contained">Contact</Button>
              </Box>
            </form>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Feedback;
