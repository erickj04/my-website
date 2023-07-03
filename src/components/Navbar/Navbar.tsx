import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NAV from '../../statics/Nav';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
  } from '@mui/material';
import './Navbar.css';

const Navbar: React.FC<{}> = () => {
    const location = useLocation();

    const pageLinks = NAV.map(({ TITLE, REF }) => {
        let active = REF === location.pathname ? 'active' : '';

        return (
            <React.Fragment>
                <Link className={`nav-links ${active}`} to={REF}>{TITLE}</Link>
            </React.Fragment>
        )
    })
    return (
        <div className="nav">
            <div className="navbar-menu">
                <AppBar position="sticky" sx={{ bgcolor: "white"}}> 
                    <Toolbar className="navbar-toolbar">
                        <span className="nav-rendered-links">
                            {pageLinks}
                        </span>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar;