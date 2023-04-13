import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack
        direction="row"
        p={2}
        sx={{
            position: "sticky",
            background: "#000",
            top: 0,
            alignItems: "center",
            justifyContent: "space-between",
        }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="red-react" height={45} />
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar;
