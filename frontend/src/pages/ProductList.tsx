import {
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();
  const navigate = useNavigate();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading products</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Stack spacing={2}>
        {data?.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>Price: ₹{product.price}</Typography>
              <Typography>Stock: {product.stock}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => navigate("/create-order")}
      >
        Create Order
      </Button>
    </>
  );
};

export default ProductList;
