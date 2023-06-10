import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarDrawer } from "./NavbarDrawer";
import { pages } from "../Constants";
import "./Navbar.css";
import DarkMode from "../DarkMode";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();
  const isMatched = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="container w-10/12 mx-auto items-center">
      <div className="navbar flex justify-between h-14">
        <div className="left flex justify-center items-center">
          <Link to="/">
            <div className="logo cursor-pointer text-5xl">DSC</div>
          </Link>
        </div>
        {isMatched ? (
          <div className="right flex">
            {pages.map((item, id) => (
              <NavLink key={id} to={item.url}>
                <span className="text-xl">{item.name}</span>
              </NavLink>
            ))}
           <DarkMode />
          </div>
        ) : (
          <div className="right flex items-center">
            <Button onClick={() => setDrawer(!drawer)}>
              <MenuIcon fontSize="large" sx={{ color: "var(--primary)" }} />
            </Button>
            {drawer ? (
              <NavbarDrawer
                pages={pages}
                drawer={drawer}
                setDrawer={setDrawer}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
