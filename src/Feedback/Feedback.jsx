import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import Sidebar from "../components/Sidebar";
import NotificationsIcon from '@mui/icons-material/Notifications';

const FeedbackForm = ({ title, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      date: '',
      time: '',
      feedback: ''
    });
    onClose();
  };

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
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
      <Box sx={{ textAlign: 'center' }}>
        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mr: 2 }}>
          Submit
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

const Feedback = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = (section) => {
    setActiveSection(section);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (formData) => {
    console.log(formData);
    // Handle form submission here
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
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('addFeedback')}>
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
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('complaint')}>
              Take Action
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="subtitle1">Product Defect</Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('Product Defect')}>
              Take Action
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="subtitle1">Client Misbehaviour</Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('Client Misbehaviour')}>
              Take Action
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="subtitle1">Doctor Recommendation</Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('Doctor Recommendation')}>
              Take Action
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="subtitle1">Others</Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpenForm('Others')}>
              Take Action
            </Button>
          </Box>
        </Box>
        {isFormOpen && activeSection === 'complaint' && (
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
            <Typography variant="h6">Take Action</Typography>
            <FeedbackForm
              title="Complaint"
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          </Box>
        )}
        {/* Add similar conditional rendering for other sections */}
        {isFormOpen && activeSection === 'Product Defect' && (
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
            <Typography variant="h6">Take Action</Typography>
            <FeedbackForm
              title="Product Defect"
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          </Box>
        )}
        {isFormOpen && activeSection === 'Client Misbehaviour' && (
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
            <Typography variant="h6">Take Action</Typography>
            <FeedbackForm
              title="Client Misbehaviour"
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          </Box>
        )}
        {isFormOpen && activeSection === 'Doctor Recommendation' && (
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
            <Typography variant="h6">Take Action</Typography>
            <FeedbackForm
              title="Doctor Recommendation"
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          </Box>
        )}
        {isFormOpen && activeSection === 'Others' && (
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
            <Typography variant="h6">Take Action</Typography>
            <FeedbackForm
              title="Others"
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Feedback;
