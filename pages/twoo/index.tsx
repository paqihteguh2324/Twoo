import ResponsiveAppBar from "@/components/amy/AppBarAmy";
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
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function TwooGift() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [products, setProducts] = useState<Item[]>([]);

  async function fetchProducts() {
    try {
      const response = await fetch("/api/product");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ backgroundColor: "#E0E2C8" }} mt={2}>
        <Grid container px={3} pt={9} spacing={2}>
          {products.map((item) => (
            <Grid item md={4} xs={6} key={item?.id}>
              <ImageListItem
                sx={{ borderRadius: "4%", boxShadow: 2, maxHeight: "250px" }}
              >
                <img
                  srcSet={`${item?.image}`}
                  src={`${item?.image}`}
                  alt={item?.name}
                  loading="lazy"
                  width={"auto"}
                  style={{ borderRadius: "4%", maxHeight: "250px" }}
                  onClick={() => handleImageClick(item?.image)}
                />
                <ImageListItemBar
                  sx={{
                    backgroundColor: "#DD86A5",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  title={item?.name}
                  subtitle={`Rp ${item?.price}`}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          ))}
          <Dialog open={open} onClose={handleClose}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFB0ba",
                mt: "15px",
              }}
            >
              It suits you
            </Typography>
            <DialogContent>
              <img
                src={selectedImage || ""}
                alt="Preview"
                style={{ maxWidth: "100%" }}
              />
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid xs={12} display={"flex"} py={5} justifyContent={"center"} alignItems={"center"}>
        <Typography fontWeight="bold" sx={{color:"#DD86A5"}}>
          Made with ❤️ by Amelia
        </Typography>
        </Grid>
      </Box>
    </>
  );
}
