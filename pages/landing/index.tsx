import React from 'react';
import { Container, Typography, Button, Avatar, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';


const HomePage: React.FC = () => {
    const router = useRouter();
    return (
            <Box
                sx={{
                    backgroundImage: "url('/static/images/background/background.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "100vh",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Avatar src="/static/images/avatar/1.jpg" sx={{ width:{md: "30%", xs:"50%"}, height:{md: "30%", xs:"50%"}, aspectRatio: '1' }}  />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", px:"20px" }}>
                        <Typography sx={{ fontFamily: "sans-serif", fontSize:{md:"40px", xs:"20px", sm:"30px"}, fontWeight:"800", textAlign:"center" }} component="h2" gutterBottom>
                            Welcome To My Website
                        </Typography></Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={()=>router.push('/dashboard')} variant="contained" sx={{backgroundColor:"#CC00FF", textTransform:"none"}}>Explore!!</Button>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default HomePage;
