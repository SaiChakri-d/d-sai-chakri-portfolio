import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DarkMode from "../DarkMode";

export const NavbarDrawer = ({ drawer, setDrawer, pages }) => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <div
          className="cols-5 h-screen"
          style={{ paddingTop: "10px", backgroundColor: "var(--tertiary)" }}
        >
          <div style={{ padding: "10px 10px" }}>
            <CloseIcon
              onClick={() => setDrawer(false)}
              style={{ color: "var(--fontcolor)" }}
            />
          </div>
          {pages.map((page, index) => (
            <ListItemButton
              component={Link}
              to={page.url}
              key={index}
              onClick={() => setDrawer(false)}
            >
              <ListItemIcon>
                <ListItemText style={{ color: "var(--fontcolor)" }}>
                  <span className="text-xl">{page.name}</span>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <DarkMode />
        </div>
      </Drawer>
    </React.Fragment>
  );
};
