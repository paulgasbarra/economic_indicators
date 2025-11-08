import type { PaletteMode } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

interface MenuProps {
  open: boolean;
  onClose: () => void;
  mode: PaletteMode;
  toggleTheme: () => void;
}

const Menu = ({ open, onClose, mode, toggleTheme }: MenuProps) => {
  const menuItems = ["Home", "Economic Indicators", "About", "Contact"];

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ my: 2, fontFamily: '"Orbitron", sans-serif', fontWeight: 700 }}
        >
          konomee
        </Typography>

        <Divider />
        <List onClick={onClose}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ py: 2, px: 2 }}>
          <FormControlLabel
            control={
              <Switch checked={mode === "dark"} onChange={toggleTheme} />
            }
            label={mode === "dark" ? "Dark Mode" : "Light Mode"}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Menu;
