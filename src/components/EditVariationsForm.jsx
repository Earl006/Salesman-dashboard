import React from 'react';
import { Box, Typography, Button, Modal, Checkbox, FormControlLabel, TextField, MenuItem } from "@mui/material";

const EditVariationsForm = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                width: '70%',
                maxWidth: 500
               
            }}>
                <Typography variant="h6">Edit Variations</Typography>
                {/* Form content */}
                <form>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                        <Box sx={{ marginRight: 2, width: '48%' }}>
                            <Typography variant="subtitle1">Availability</Typography>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="In Stock"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Out of Stock"
                            />
                        </Box>
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="subtitle1">Product Title</Typography>
                            <TextField fullWidth margin="normal" />
                            <Typography variant="subtitle1">Name</Typography>
                            <TextField fullWidth margin="normal" />
                            <Typography variant="subtitle1">Model</Typography>
                            <TextField fullWidth margin="normal" />
                            <Typography variant="subtitle1">Price</Typography>
                            <TextField select fullWidth margin="normal">
                                <MenuItem value="client1">Client 1</MenuItem>
                                <MenuItem value="client2">Client 2</MenuItem>
                                <MenuItem value="client3">Client 3</MenuItem>
                            </TextField>
                            <Typography variant="subtitle1">Upload Image</Typography>
                            {/* Implement your image upload component here */}
                        </Box>
                    </Box>
                    <Typography variant="subtitle1">Product Details</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                        <Box sx={{ marginRight: 2, width: '48%' }}>
                            <Typography variant="subtitle1">Product Number</Typography>
                            <TextField fullWidth margin="normal" />
                            <Typography variant="subtitle1">Brand</Typography>
                            <TextField fullWidth margin="normal" />
                            <Typography variant="subtitle1">Size</Typography>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="S"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="L"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="XL"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="XXL"
                            />
                            {/* Add more sizes as needed */}
                        </Box>
                        <Box sx={{ width: '48%' }}>
                            <Typography variant="subtitle1">Color</Typography>
                            {/* <TextField select fullWidth margin="normal">
                                <MenuItem value="color1">Color 1</MenuItem>
                                <MenuItem value="color2">Color 2</MenuItem>
                                <MenuItem value="color3">Color 3</MenuItem>
                            </TextField> */}
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Red"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="White"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Black"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Navy Blue"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Green"
                            />
                            {/* Add more colors as needed */}
                        </Box>
                    </Box>
                    {/* Thumbnails */}
                    <Typography variant="subtitle1">Thumbnails</Typography>
                    {/* Implement your thumbnails component here */}
                    {/* Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" color="primary" sx={{ ml: 1 }}>Save/Update</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default EditVariationsForm;
