import {
    AppBar,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="sticky">
            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    MyStore
                </Typography>


                <Box sx={{ flexGrow: 1 }} />

                <CartButton />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
