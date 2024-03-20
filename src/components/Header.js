import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './img/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Pientavarat', 'Suurtavarat', 'DJ-Palvelut'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="/">
          <Box
            component="img"
            sx={{
            display: { xs: 'none', md: 'flex' },
            minHeigth:64,
            minWidth:128,
            maxHeight:120,
            maxWidth:246,
            }}
            alt="Luminary Events logo."
            src={Logo}
          />
        </Link>

          <Box sx={{display: { xs: 'flex', md: 'none' }, mr: -5}}>
            <IconButton
              size="small"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontWeight: '800' }}>{page}</Typography>
                </MenuItem>
              </Link>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 0.1,
            minHeigth:64,
            minWidth:128,
            maxHeight:120,
            maxWidth:246,
            margin: 'auto',
            cursor: 'pointer',
            }}
            alt="Luminary Events logo."
            src={Logo}
            onClick={() => navigate('/')}
            />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 3, color: 'white', display: 'block',fontWeight: '800'}}>
                  {page}
                </Button>
              </Link>
            ))}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
