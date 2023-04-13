import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        sx={{
            flexDirection: { xs: "row", md: "column" },
            overflowY: "auto",
            height: { xs: "auto", md: "98%" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                key={category.name}
                style={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: "white",
                }}
                onClick={() => setSelectedCategory(category.name)}
            >
                <span
                    style={{
                        color:
                            category.name === selectedCategory
                                ? "white"
                                : "red",
                        marginRight: "15px",
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{
                        opacity: category.name === selectedCategory ? 1 : 0.8,
                    }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);

export default SideBar;
