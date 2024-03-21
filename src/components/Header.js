import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from './img/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { MenuItem as MuiMenuItem } from '@mui/material';
import './Header.css';


const pages = ['Pientavarat', 'Suurtavarat', 'DJ-Palvelut'];
const colors = ['#FF93FF', '#4CC6FF', '#FFC227'];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      md: 1100
    },
  },
});

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  const MenuItem = styled(MuiMenuItem)(({ color }) => ({
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundImage: `linear-gradient(to right, ${color}, transparent)`,
    },
  }));

  return (
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Link to="/">
          <Box
          sx={{
              display: { xs: 'none', md: 'flex' },
              height: 80,
              width: 246,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '4px',
                backgroundImage: `linear-gradient(to right, transparent, #FF93FF, transparent)`,
              },
            }}>
              <Box
                  component="img"
                  alt="Luminary Events logo."
                  src={Logo}
                  sx={{
                  height: '105%',
                  width: '105%',
                  objectFit: 'contain',
                }}
              />
        </Box>
        </Link>

          <Box sx={{display: { xs: 'flex', md: 'none',}, mr: -12}}>
            
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
              {pages.map((page, index) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: 'none' }}>
                  <MenuItem 
                    onClick={handleCloseNavMenu} 
                    color={colors[index % colors.length]}>
                      <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
              </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
                height: 80,
                width: 246,
                margin: 'auto',
                cursor: 'pointer',
                position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundImage: `linear-gradient(to right, transparent, #FF93FF, transparent)`,
                  },
              }}>
                    <Box
                        component="img"
                        alt="Luminary Events logo."
                        src={Logo}
                        onClick={() => navigate('/')}
                        sx={{
                        height: '105%',
                        width: '105%',
                        objectFit: 'contain',
                        
                      }}
                    />
        </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              {pages.map((page, index) => (
          <Link 
                key={page} 
                to={`/${page}`} 
                style={{
                position: 'relative',
                textDecoration: 'none',
                overflow: 'hidden',
                display: 'inline-block'
              }}
            >
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ 
                  my: 2, 
                  mx: 7, 
                  color: '#F2F3F5',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  transition: 'font-weight 0.5s ease',
                  fontFamily: 'Quicksand, sans-serif',
                  fontWeight: 350,
                  fontSize: '1.3em',
                  marginRight: '3em',
                  ':hover': {
                  animation: 'forwards fadeIn 0.5s',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                },
              }}>
                {page}
              </Button>
              <span 
                style={{
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '4px',
                  backgroundImage: `linear-gradient(to right, ${colors[index % colors.length]}, transparent)`,
                  zIndex: 0
                }}
              />
              <span 
                style={{
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '4px',
                  height: '100%',
                  backgroundImage: `linear-gradient(to top, ${colors[index % colors.length]}, transparent)`,
                  zIndex: 0
                }}
              />
          </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Header;
