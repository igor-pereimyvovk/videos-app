import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

import {
    Navbar,
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from "./components";

const App = () => (
    <div>
        <BrowserRouter>
            <Box
                sx={{
                    backgroundColor: "#000",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "100vh",
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route
                        path="/search/:searchTerm"
                        element={<SearchFeed />}
                    />
                </Routes>
            </Box>
        </BrowserRouter>
    </div>
);
export default App;
