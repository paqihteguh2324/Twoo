import ResponsiveAppBar from "@/components/amy/AppBarAmy"
import {
    Box,
    Grid,
    IconButton,
    ImageListItem,
    ImageListItemBar,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import Footer from "@/components/amy/Footer";

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
  }

const item = [
    { id: 1, name: "Ring Beads", price: 2000, image: "/static/twoo/item/ringbeads.jpeg" },
    { id: 2, name: "Twoo Gift", price: 100000, image: "/static/twoo/Logo/logo.jpg" },
    { id: 3, name: "Twoo Gift", price: 100000, image: "/static/twoo/Logo/logo.jpg" },
]

export default function TwooGift() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ backgroundColor: "#FFC0CB" }} height={"100vh"}>
                <Grid container px={3} py={9} spacing={1}>
                    {item.map((item) => (
                        <Grid item md={4} xs={6} key={item?.id}>
                            <ImageListItem
                                sx={{ borderRadius: "4%", boxShadow: 2 }}
                            >
                                <img
                                    srcSet={`${item?.image}`}
                                    src={`${item?.image}`}
                                    alt={item?.name}
                                    loading="lazy"
                                    style={{ borderRadius: '4%' }}
                                    onClick={() => handleImageClick(item?.image)}
                                />
                                <ImageListItemBar
                                    sx={{
                                        backgroundColor: "#FFC0CBaa",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                    title={item?.name}
                                    subtitle={`Rp ${item?.price}`}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item?.name}`}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem></Grid>
                    ))}
                    <Dialog open={open} onClose={handleClose}>
                        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold", color: "#FFB0ba", mt:"15px" }}>It suits you</Typography>
                        <DialogContent>
                            <img src={selectedImage || ""} alt="Preview" style={{ maxWidth: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </Grid>
                <Footer />
            </Box>
        </>
    )
}