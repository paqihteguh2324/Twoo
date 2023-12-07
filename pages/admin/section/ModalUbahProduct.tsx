import { Box, Grid, Modal, TextField, Typography, Input, InputAdornment, IconButton, Button } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useFormik } from "formik";
import * as yup from 'yup';
import { storage as firebaseStorage } from "./firebaseConfig"; // Rename the import alias to avoid conflicts
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // Import the correct ref function from Firebase Storage
import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}


export default function ModalUbahProduct({ open, handleClose, setAlert, selectedProduct }: { open: boolean, handleClose: () => void, setAlert: (data:any) => void, selectedProduct?: Product }) {

    const validationSchema = yup.object({
        name: yup
            .string()
            .required('Name is required'),
        price: yup
            .number()
            .required('Price is required'),
        image: yup
            .string()
            .required('Image is required'),
    });
    const formik = useFormik({
        initialValues: selectedProduct || {
            name: '',
            price: 0,
            image: '',
        
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            handleSubmit();
        },
    });

    const handleSubmit = async () => {
        const e = formik?.values
        
        try {
            await axios.put(`/api/product/${selectedProduct?.id}`, {
                name: e?.name,
                price: Number(e?.price),
                image: e?.image,
            });
            handleClose();
            setAlert({open: true, severity: "success", message: "Berhasil Ubah Product"});
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        }
      };


      const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0];
        console.log(e.target.files?.[0]);
      
        if (selectedImage) {
          const imageRef = storageRef(firebaseStorage, `images/${selectedImage.name}`);
          
          try {
            // Upload the selected image to Firebase Storage
            await uploadBytes(imageRef, selectedImage);
      
            // Get the download URL after the upload is completed
            const downloadURL = await getDownloadURL(imageRef);
      
            // Set the image URL in formik.values
            formik.setFieldValue("image", downloadURL);
            console.log("Download URL:", downloadURL);
            formik.resetForm();
            
            // Do something with the obtained URL, such as storing it in state or using it to display the image
          } catch (error) {
            console.error("Error uploading or getting download URL:", error);
            // Handle error
          }
        }
      };

      useEffect(() => {
        if (selectedProduct) {
            formik.setFieldValue("name", selectedProduct.name);
            formik.setFieldValue("price", selectedProduct.price);
            formik.setFieldValue("image", selectedProduct.image);
        }
      }, [selectedProduct]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{ width: { md: "30%", xs: "80%" }, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}
        >
            <Box
                sx={{ backgroundColor: "#ffffff", width: "100%", height:"fit-content", p: 2, color: "#000" }}
            >
                <Typography variant="h6" component="h2" sx={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}>
                    Tambah Product
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid item xs={12} sm={12} display={"flex"} justifyContent={"center"} mt={4}>
                        {formik?.values?.image && <img src={formik?.values?.image} width={"auto"} height={"240px"} />}
                    </Grid>
                    <Grid item xs={12} sm={12} display={"flex"} justifyContent={"center"}>
                        <Input
                            type="file"
                            onChange={handleImageChange}
                            sx={{ width: "240px" }}
                            inputProps={{ accept: 'image/*' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        component="label"
                                        htmlFor="upload-image"
                                        aria-label="upload picture"
                                        edge="end"
                                    >
                                        <PhotoCamera />
                                        <input
                                            id="upload-image"
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageChange}
                                        />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                id="price"
                                name="price"
                                label="Price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                error={formik.touched.price && Boolean(formik.errors.price)}
                                helperText={formik.touched.price && formik.errors.price}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Button variant="contained" onClick={handleClose} sx={{ textTransform: "none", backgroundColor: "#333333", color: "#fff", mr: "10px" }}>Cancel</Button>
                        <Button variant="contained" type="submit" sx={{ textTransform: "none", backgroundColor: "#22ee55", color: "#fff" }}>Save</Button>
                    </Grid>
                </form>
            </Box>
        </Modal>
    )
}