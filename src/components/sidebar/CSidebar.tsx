// CSidebar.tsx
import React, { useContext, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Groups2Outlined, Logout, DensitySmall, LeaderboardOutlined, HomeOutlined, CurrencyExchangeOutlined, DateRangeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CSidebar.css';
import { UserContext } from '../../context/UserContext';
import { checkPermission, Permission } from '../../services/sidebar';

const CSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useContext(UserContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  function permission(routecheck: String) {
    checkPermission(routecheck).then((result: Permission) => {
        if (result.permisso === true) {
            window.location.href = String(routecheck);
        } else {
            alert(result.msg);
        }
    });
  }

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
                    
                    {/* to="/despesas" */}
                    <Link to={''} onClick={() => {permission("/despesas")}}>
                        <MenuItem className='menu-item' icon={<CurrencyExchangeOutlined className='menu-icon' />}>
                            Despesas
                        </MenuItem>
                    </Link>

                    {/* to="/competencias" */}
                    <Link to={''} onClick={() => {permission("/monthly-period")}}>
                        <MenuItem className='menu-item' icon={<DateRangeOutlined className='menu-icon' />}>
                        Competências
                        </MenuItem>
                    </Link>

                    {/* to="/relatorios" */}
                    <Link to={''} onClick={() => {permission("/relatorios")}}>
                        <MenuItem className='menu-item' icon={<LeaderboardOutlined className='menu-icon' />}>
                        Relatórios
                        </MenuItem>
                    </Link>

                    {/* to="/usuarios" */}
                    {/* 
                    TELA INDISPONÍVEL
                    <Link to={''} onClick={() => {permission("/usuarios")}}>
                        <MenuItem className='menu-item' icon={<Groups2Outlined className='menu-icon' />}>
                            Usuários
                        </MenuItem>
                    </Link> */}
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
