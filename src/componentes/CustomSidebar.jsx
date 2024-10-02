import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function CustomSidebar() {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<a href='https://www.google.com'></a>}> Documentation</MenuItem>
        <MenuItem component={<a href='#'></a>}> Calendar</MenuItem>
        <MenuItem component={<a href='#'></a>}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
}