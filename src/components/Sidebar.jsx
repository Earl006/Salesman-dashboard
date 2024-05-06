import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Item = ({ icon, text, to, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === text}
      onClick={() => setSelected(text)}
      icon={icon}
    >
      <Link to={to}>
        <Typography>{text}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box>
      <ProSidebar
        sx={{
          "&.pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: `transparent !important`,
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-inner-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Menu iconShape="square">
          <Item
            icon={<HomeOutlinedIcon />}
            text="Dashboard"
            to="/"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<PersonOutlinedIcon />}
            text="Clients"
            to="/clients"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<ViewInArOutlinedIcon />}
            text="Products"
            to="/products"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<AssignmentOutlinedIcon />}
            text="Tasks"
            to="/tasks"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<RocketLaunchOutlinedIcon />}
            text="Visits Planning"
            to="/visits"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<AssessmentOutlinedIcon />}
            text="Performance"
            to="/performance"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<StarHalfOutlinedIcon />}
            text="Feedback"
            to="/feedback"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            icon={<ShoppingBasketOutlinedIcon />}
            text="Orders"
            to="/orders"
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
