import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CreateItemModal from "../../components/UI/CreateItemModal";
import { SoundBoardItem } from "../../components/types/types";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleCreateItem = (newItem: SoundBoardItem) => {
    console.log("Created item:", newItem);
  };

  return (
    <div>
      <Box className="font-link-barr" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Characters Sound Board
            </Typography>
            <Button onClick={() => handleNavigate("/")} color="inherit">
              Home
            </Button>
            <Button
              onClick={() => handleNavigate("/characters")}
              color="inherit"
            >
              Characters
            </Button>
            <Button onClick={handleOpen} color="inherit">
              Create
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <CreateItemModal
        isOpen={open}
        onClose={handleClose}
        onCreateItem={handleCreateItem}
      />
    </div>
  );
};
export { Header };
