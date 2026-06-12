import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import WifiIcon from "@mui/icons-material/Wifi";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Sidebar() {
  const [checked, setChecked] = useState(["mode"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box
      sx={{
        maxWidth: 360,
        bgcolor: "background.paper",
        flex: 1,
        display: { xs: "none", md: "block" },
      }}
    >

      <Box sx={{ position: 'sticky', top: 70 }}>

        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <ListItem>
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Mode" />
          <Switch
            edge="end"
            onChange={handleToggle("mode")}
            checked={checked.includes("mode")}
            slotProps={{
              input: { "aria-labelledby": "switch-list-label-wifi" },
            }}
          />
        </ListItem>
      </Box>
    </Box>
  );
}
