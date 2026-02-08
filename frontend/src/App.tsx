import { CssBaseline, Container } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
