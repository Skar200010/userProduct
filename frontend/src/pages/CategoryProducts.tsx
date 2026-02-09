import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const CategoryProducts = () => {
  const { category } = useParams<{ category: string }>();
  const { data, isLoading, isError } = useProducts(category);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading products</Typography>;

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {category?.toUpperCase()}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {data?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={product.imageUrl}
                alt={product.name}
              />

              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryProducts;
