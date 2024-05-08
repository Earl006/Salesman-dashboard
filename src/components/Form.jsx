// import React from 'react';
// import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// const Form = ({ open, handleClose }) => {
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add User</DialogTitle>
//       <DialogContent>
//         <DialogContentText>  Add User </DialogContentText>
//         <TextField autoFocus margin="dense" id="fullname" label="Full Name" fullWidth />
//         <TextField margin="dense" id="password" label="Password" fullWidth />
//         <TextField margin="dense" id="role" label="Role" fullWidth />
//         <TextField margin="dense" id="phone" label="Phone" fullWidth />
//         <TextField margin="dense" id="email" label="Email" fullWidth />
//         <TextField margin="dense" id="address" label="Address" fullWidth />
//         <TextField margin="dense" id="employmentNumber" label="Employment Number" fullWidth />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="primary">Cancel</Button>
//         <Button onClick={handleClose} color="primary">Save & Update</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Form;


import {Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
    FULLNAME: "",
    PASSWORD: "",
    ROLE: "",
    PHONE: "",
    EMAIL: "",
    ADDRESS: "",
    EMPLOYMENTNUMBER: "",
}


const userSchema = yup.object().shape({
    FULLNAME : yup.string().required("Please enter your Full name"),
        PASSWORD : yup.string().required("Please enter your Password"),
        PHONE : yup.string().required("Please enter your Phone"),
        EMAIL : yup.string().required("Invalid Email"),
        ADDRESS : yup.string().required("Please enter your Address"),
        EMPLOYEMENTNUMBER : yup.string().required("Please enter your Employment Number"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:400px)");

    const handleFormSubmit = (values, { resetForm }) => {
        console.log(values); // Log form values to console
        resetForm(); // Reset form after submission

    }
    return <Box m="15px">
        <Header title="Add User" />
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box display="grid" gap="20px" gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 2"},
                        }}
                        
                        >
                         <TextField
                         fullWidth
                         variant="filled"
                         type="text"
                         label="Full Name"
                         onBlur={handleBlur}
                         value={values.FULLNAME}
                         onChange={handleChange}
                         name="fullname"
                         errors={!!touched && !!errors.FULLNAME}
                         helperText={touched.FULLNAME && errors.FULLNAME}
                         se={{gridColumn: "span 1"}}
                         />
                         <Button
                type="button"
                variant="outlined"
                onClick={() => {
                
                }}
              >
                Cancel
              </Button>
              
              <Button type="submit" variant="contained" color="primary">
                Save & Update
              </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>

}

export default Form;
