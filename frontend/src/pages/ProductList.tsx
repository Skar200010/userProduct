import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Box,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import CartDebug from "./cartdebug";
import { Snackbar } from "@mui/material";
import { useState } from "react";



const ProductList = () => {
  const { category } = useParams<{ category: string }>();
  const { data, isLoading, isError } = useProducts(category);
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);


  if (isLoading) return <Typography>Loading products...</Typography>;
  if (isError) return <Typography>Error loading products</Typography>;

  return (
    <>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {category?.toUpperCase()}
        </Typography>

        <CartDebug />

        <Grid container spacing={4}>
          {data?.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip
                    label={product.category.toUpperCase()}
                    size="small"
                    sx={{ mb: 1 }}
                  />

                  <Typography variant="h6">
                    {product.name}
                  </Typography>

                  <Typography>₹{product.price}</Typography>

                  <Typography color="text.secondary">
                    Stock: {product.stock}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={product.stock === 0}
                    onClick={() =>
                      addToCart({
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        imageUrl: product.imageUrl,
                        stock: product.stock,
                      })
                    }

                  >
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Added to cart"
      />
    </>
  );
};

export default ProductList;
