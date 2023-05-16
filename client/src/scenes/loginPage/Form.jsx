import { useState } from "react";
import { Box } from "@mui/system";
import {
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "mui/material";
import EditOutlineIcon from "mui/icons-material/EditOutlined";
import { Formik } from "formik"
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

// yup validation schema

const registerSchema = yup.object().shape({
    firstName: yup.string().required("Required Field"),
    lastName: yup.string().required("Required Field"),
    email: yup.string().email("Invaild email").required("Required Field"),
    password: yup.string().required("Required Field"),
    location: yup.string().required("Required Field"),
    occupation: yup.string().required("Required Field"),
    picture: yup.string().required("Required Field"),

})

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Required Field"),
    password: yup.string().required("Required Field"),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password : "",
    location: "",
    occupation: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password : "",
};


const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette }= useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const handleFormSubmit = async (values, onSubmitProps) => {};

    return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                    display ="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"},
                
                    }}
                    >
                        {isRegister && (
                            <>
                            <TextField
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2"}}
                            />

                            <TextField
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2"}}
                            />


                            <TextField
                            label="Location"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.location}
                            name="location"
                            error={Boolean(touched.location) && Boolean(errors.location)}
                            helperText={touched.location && errors.location}
                            sx={{ gridColumn: "span 4"}}
                            />


                            <TextField
                            label="Occupation"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.occupation}
                            name="occupation"
                            error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                            helperText={touched.occupation && errors.occupation}
                            sx={{ gridColumn: "span 4"}}
                            />

                            <Box
                            gridColumn="span 4"
                            border={`1px solid $ {palette.neutral.medium}`}
                            borderRadius="5px"
                            p="1rem"
                            > 
                            <Dropzone
                            acceptedFiles=".jpg, .jpeg, .png"
                            multiple={false}
                            onDrop={(acceptedFiles) => 
                                setFieldValue("picture", acceptedFiles[0])
                            }
                            >
                                {({ getRootProps, getInputProps })}
                            <Box
                            {...getRootProps()}
                            border={`2px dashed ${palette.primary.main}`}
                            p="1rem"
                            sx={{ "&:hover" : {cursor: "pointer" } }}
                            >
                                <input {...getInputProps()} />
                                {!values.picture ? (
                                    <p>Upload Picture</p>
                                ) : (
                                    <FlexBetween>
                                        <Typography> {values.picture.name}</Typography>
                                    <EditOutlineIcon />
                                    )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}

            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};


export default Form 