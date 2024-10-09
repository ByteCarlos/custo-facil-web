// CSidebar.tsx
import React, { useContext, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Groups2Outlined, Settings, Logout, DensitySmall, LeaderboardOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CSidebar.css';
import { UserContext } from '../../context/UserContext';

const CSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`custom-sidebar ${collapsed ? 'collapsed-sidebar' : ''}`}>
        <Sidebar className='sidebar' collapsed={collapsed}>
            <div className="logo" onClick={toggleSidebar}>
                <h1>{collapsed ? <DensitySmall /> : `Olá, ${user ? user.name : ''}`}</h1>
            </div>
            <Menu className='menu'>
                <div className="sidebar-main">
                    <MenuItem className='menu-item' icon={<LeaderboardOutlined className='menu-icon' />}>
                        <Link to="/financeiro">Financeiro</Link>
                    </MenuItem>
                    <MenuItem className='menu-item' icon={<Groups2Outlined className='menu-icon' />}>
                        <Link to="/usuarios">Usuários</Link>
                    </MenuItem>
                    <MenuItem className='menu-item' icon={<Settings className='menu-icon' />}>
                        <Link to="/configuracoes">Configurações</Link>
                    </MenuItem>
                </div>

                <div className="sidebar-footer">
                    <MenuItem className='menu-item' icon={<Logout className='menu-icon' />}>
                        <Link to="/logout">Sair</Link>
                    </MenuItem>
                </div>
            </Menu>
        </Sidebar>
    </div>
  );
};

export default CSidebar;
