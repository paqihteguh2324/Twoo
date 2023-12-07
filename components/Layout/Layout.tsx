import React from "react";
import ResponsiveAppBar from "../AppBar/AppBar";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <ResponsiveAppBar />
        <Box
        sx={{
            backgroundColor: "#0F0E17",
            backgroundSize: "100% 100%",
            height: "100vh",
            color:"#eee",
            paddingTop:{md:"20px", xs:"150px"}
        }}
    >
        {children}
        </Box>
        
        </>
    );
    }