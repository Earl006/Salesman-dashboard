import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'; // For logout icon
import Logo from '../assets/sales-logo.jpeg'; // Import your logo file
import Topbar from '../global/Topbar';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

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
  const [selected, setSelected] = useState('Dashboard');

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <>
      <Topbar />

      <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 999 }}>
        <ProSidebar
          sx={{
            '.pro-sidebar': {
              background: '#f2f2f2 !important',
              height: '100vh',
              paddingTop: '64px', // Adjust this value based on the height of your top bar
            },
            '.pro-sidebar-inner': {
              background: '#f2f2f2 !important',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
            '.pro-icon-wrapper': {
              background: 'transparent',
            },
            '.pro-inner-item': {
              padding: '5px 35px 5px 20px !important',
            },
            '.pro-inner-item:hover': {
              color: '#868dfb !important',
            },
            '.pro-inner-item.active': {
              color: '#6870fa !important',
            },
          }}
        >
          <Menu iconShape="square">
            {/* Add your logo */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src={Logo} alt="Logo" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
            </div>

            <Item
              icon={<HomeOutlinedIcon />}
              text="Dashboard"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<ManageAccountsOutlinedIcon />}
              text="User Management"
              to="/manage-users"
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

          {/* Logout Button */}
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', padding: '10px' }}>
            <MenuItem onClick={handleLogout} className="logout-button">
              <ExitToAppOutlinedIcon style={{ marginRight: '10px' }} />
              <Typography variant="subtitle1">Logout</Typography>
            </MenuItem>
          </div>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
