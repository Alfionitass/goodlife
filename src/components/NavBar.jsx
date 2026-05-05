import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import {
  Button,
  Box,
  ListItemButton,
  ListItemText,
  List,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import { slugify } from '../utils/utils';
import data from '../data/data.json';
import { products } from '../data/product';

export const NavList = ({ menu, handleLinkClick, direction = 'row' }) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: direction === 'row' ? 3 : 1,
        my: 0,
        p: 0,
      }}
    >
      {menu?.map((item, idx) => (
        <ListItemButton
          key={idx}
          component={NavLink}
          to={item.path}
          onClick={handleLinkClick}
          sx={{
            width: 'auto',
            px: 1,
            color: 'white',
            '&:hover': {
              color: 'white',
            },
            fontWeight: 700,
          }}
        >
          {item.menu !== 'Contact' ? (
            <ListItemText
              primary={item.menu}
              sx={{
                '.MuiTypography-root': {
                  whiteSpace: 'nowrap',
                },
              }}
            />
          ) : (
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'primary.white',
                color: 'text.primary',
                textTransform: 'capitalize'
              }}
            >
              {item.menu}
            </Button>
          )}
        </ListItemButton>
      ))}
    </List>
  );
};

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 900 && setMobileOpen(false);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: isScrolled ? 'secondary.main' : 'transparent',
        transition: 'all 0.3s',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: { xs: 'wrap' },
        }}
      >
        <Link to="/">
          <Box component="img" src={data.logo.goodlifeWhite} alt="Goodlife Logo" sx={{ width: 150, height: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <NavList menu={data.menu} handleLinkClick={handleLinkClick} direction="row" />
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'white' }}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            sx: {
              width: 260,
              bgcolor: 'secondary.main',
              color: 'white',
              pt: 2,
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ px: 2 }}>
            <NavList menu={data.menu} handleLinkClick={handleLinkClick} direction="column" />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
