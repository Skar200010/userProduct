import { CssBaseline, Container } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
         <Header />
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
