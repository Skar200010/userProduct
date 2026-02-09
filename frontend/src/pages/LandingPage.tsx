import { Box, Typography, Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = ["electronics", "clothing", "lifestyle"];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shop by Category
      </Typography>

      <Typography color="text.secondary">
        Choose a category to explore products
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category.toUpperCase()}
            clickable
            color="primary"
            sx={{ px: 3, py: 2, fontSize: 16 }}
            onClick={() => navigate(`/category/${category}`)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LandingPage;
