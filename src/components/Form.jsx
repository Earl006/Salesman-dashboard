import {Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
    fullname: "", 
    password: "", 
    role: "", 
    phone: "", 
    email: "", 
    address: "", 
    employmentnumber: "", 
};

const userSchema = yup.object().shape({
    fullname: yup.string().required("Please enter your Full name"),
    password: yup.string().required("Please enter your Password"),
    phone: yup.string().required("Please enter your Phone"),
    email: yup.string().required("Invalid Email"),
    address: yup.string().required("Please enter your Address"),
    employmentnumber: yup.string().required("Please enter your Employment Number"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:400px)");

    const handleFormSubmit = (values, { resetForm }) => {
        console.log(values); 
        resetForm(); 

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
                         value={values.fullname}
                         onChange={handleChange}
                         name="fullname"
                         errors={!!touched && !!errors.fullname}
                         helperText={touched.fullname && errors.fullname}
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
