import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TopNav from "gauravnarnaware/NavItem/TopNav";
import Link from "next/link";
export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, padding: "10px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-5">
        <h1 className="text-lg font-semibold">Gaurav Narnaware</h1>
      </div>{" "}
      <Divider />
      <List>
        {TopNav.map((text, index) => (
          <Link key={index} href={text.location}>
            <ListItem disablePadding>
              <ListItemButton>
                <i className={`text-blue-600 ${text.icon} mr-5 text-xl`} />
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

        <Divider />
        <Link href="/Admin/Statistics">
          <ListItem disablePadding>
            <ListItemButton>
              <i className={`uil uil-dashboard text-blue-600  mr-5 text-xl`} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <button onClick={toggleDrawer("left", true)} >
          <i className="bi bi-list dark:text-gray-100 text-black text-2xl" />
        </button>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </>
    </div>
  );
}
