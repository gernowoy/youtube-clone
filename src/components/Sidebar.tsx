import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { FC } from "react";
import { SidebarProps } from "../types/types";

const Sidebar: FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background:
              category.name === selectedCategory ? "#C1121F" : "transparent",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : '#C1121F',
              marginRight: "10px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
