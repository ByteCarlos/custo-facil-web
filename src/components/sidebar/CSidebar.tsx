// CSidebar.tsx
import React, { useContext, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Groups2Outlined, Logout, DensitySmall, LeaderboardOutlined, HomeOutlined, CurrencyExchangeOutlined, DateRangeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CSidebar.css';
import { UserContext } from '../../context/UserContext';

const CSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useContext(UserContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`custom-sidebar ${collapsed ? 'collapsed-sidebar' : ''}`}>
        <Sidebar className='sidebar' collapsed={collapsed}>
            <div className="logo" onClick={toggleSidebar}>
                <h1>{collapsed ? <DensitySmall /> : `Olá, ${user ? user.nome : ''}`}</h1>
            </div>
            <Menu className='menu'>
                <div className="sidebar-main">
                    <Link to="/">
                        <MenuItem className='menu-item' icon={<HomeOutlined className='menu-icon' />}>
                            Página Inicial
                        </MenuItem>
                    </Link>

                    <Link to="/despesas">
                        <MenuItem className='menu-item' icon={<CurrencyExchangeOutlined className='menu-icon' />}>
                            Despesas
                        </MenuItem>
                    </Link>

                    <Link to="/competencias">
                        <MenuItem className='menu-item' icon={<DateRangeOutlined className='menu-icon' />}>
                        Competências
                        </MenuItem>
                    </Link>

                    <Link to="/relatorios">
                        <MenuItem className='menu-item' icon={<LeaderboardOutlined className='menu-icon' />}>
                        Relatórios
                        </MenuItem>
                    </Link>

                    <Link to="/usuarios">
                        <MenuItem className='menu-item' icon={<Groups2Outlined className='menu-icon' />}>
                            Usuários
                        </MenuItem>
                    </Link>
                </div>

                <div className="sidebar-footer">
                    {/* @todo: implementar onClick com função para remover usuário salvo */}
                    <Link to="/" onClick={logout}>
                        <MenuItem className='menu-item' icon={<Logout className='menu-icon' />}>
                            Sair
                        </MenuItem>
                    </Link>
                </div>
            </Menu>
        </Sidebar>
    </div>
  );
};

export default CSidebar;
