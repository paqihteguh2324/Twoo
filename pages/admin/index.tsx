import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '@/components/amy/AppBarAmy';
import Box from '@mui/material/Box';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Alert, Snackbar, Modal } from '@mui/material';
import ModalTambahProduct from './section/ModalTambahProduct';
import axios from 'axios';
import ModalUbahProduct from './section/ModalUbahProduct';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

type AlertType = {
    open: boolean;
    severity: "success" | "error" | "info" | "warning"; // Define allowed severity types
    message: string;
  };

const AdminDashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalAdd, setModalAdd] = useState(false);
    const [selectedProduct,setSelectedProduct] = useState(0);
    const [selected, setSelected] = useState<Product>(); // Add a new state variable called `selected` to store the selected product
    const [onDelete, setOnDelete] = useState(false);
    const [modalPut, setModalPut] = useState(false);
    const [alert, setAlert] = useState<AlertType>({
        open: false,
        severity: "success",
        message: "Sukses",
    });
    async function fetchProducts() {
        try {
            const response = await fetch('/api/product');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                throw new Error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const handleDelete = (id: number) => {
        deleteProduct(id);
        setOnDelete(false);
    }
    
    async function deleteProduct(id: number) {
        try {
            const response = await axios.delete(`/api/product/${id}`);
            if ((response).status === 200) {
                fetchProducts();
                setAlert({ ...alert, open: true, severity: "success", message: "Berhasil Delete Product" });
            } else {
                throw new Error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [modalAdd]);
    return (
        <>
            <ResponsiveAppBar title="Twoo Gift Admin" />
            <Box height={"100vh"} pt={"90px"} px={2} sx={{backgroundColor:"#ddd"}}>
                <Button sx={{ textTransform: "none", backgroundColor: "#333333", color: "#eee", mb: "10px" }} onClick={()=>setModalAdd(true)} >Tambah Produk</Button>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#FFB6C1" }} >
                                <TableCell align='center' width={"100px"}>No</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell align='center'>Image</TableCell>
                                <TableCell align='center'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map((product, index) => (
                                    <TableRow key={product.id} >
                                        <TableCell align='center'>{index+1}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell align='center'><img src={product.image} width={"auto"} height={"240px"} /></TableCell>
                                        <TableCell align='center' >
                                            <Button sx={{ textTransform: "none", backgroundColor: "#FFFF00", color: "#111", mr:{md: "10px", xs:"0"} }}
                                            onClick={()=>{
                                                setSelected(product)
                                                setModalPut(true)
                                            }}  
                                            >Edit</Button>
                                            <Button sx={{ textTransform: "none", backgroundColor: "#B22222", color: "#eee" }} onClick={()=>{
                                                setSelectedProduct(product?.id)
                                                setOnDelete(true)}}>Hapus</Button>
                                        </TableCell>
                                    </TableRow>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Modal
            open={onDelete} onClose={()=>setOnDelete(false)}
            sx={{ width: { md: "30%", xs: "80%" }, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", height: "40%", borderRadius: "10px" }}
            >
                <Box sx={{ width: "100%", height: "fit-content", backgroundColor: "#fff", position: "absolute", top: "0", left: "0", zIndex: 100,  borderRadius: "10px" }}>
                    <Box sx={{ width: "100%", height: "fit-content", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ width: "80%", height: "fit-content", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", p: 2 }}>
                            <Alert severity="error" sx={{ width: "100%" }}>Apakah anda yakin ingin menghapus produk ini?</Alert>
                            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                                <Button sx={{ textTransform: "none", backgroundColor: "#B22222", color: "#eee", mr: 2 }} onClick={()=>setOnDelete(false)}>Tidak</Button>
                                <Button sx={{ textTransform: "none", backgroundColor: "#FFFF00", color: "#111" }} onClick={()=>handleDelete(selectedProduct)}>Ya</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            <ModalTambahProduct open={modalAdd} handleClose={()=>{ 
                setModalAdd(false)}} setAlert={(data:any)=>setAlert(data)}/>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                style={{ width: '40%' }} 
                onClose={() => setAlert({...alert, open: false })}>
            <Alert  severity={alert.severity} sx={{ display: 'flex', width:'95%', color:"#2E7D32", textAlign:'left', fontWeight:'500'}}>{alert.message}</Alert>
            </Snackbar>
            <ModalUbahProduct open={modalPut} handleClose={()=>{
                setModalPut(false)
            }} setAlert={(data:any)=>setAlert(data)} selectedProduct={selected  || undefined}/>
        </>
    );
};



export default AdminDashboard;
