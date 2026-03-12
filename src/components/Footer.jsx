import { Link, NavLink } from 'react-router';
import data from '../data/data.json';
import {
  Button,
  Box,
  ListItemButton,
  ListItemText,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const newMenu = data.menu.filter((item) => item.menu !== 'Contact');

  return (
    <Box sx={{ backgroundColor: 'secondary.main', color: 'white', p: { xs: 4, md: 2 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }} mb={4}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontSize: { xs: '2.25rem', md: '3rem' },
              width: '100%',
            }}
          >
            Stay
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' },
              width: '100%',
              pl: 4,
            }}
          >
            Connected
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', md: '1.25rem' },
                width: '100%',
              }}
            >
              Informations
            </Typography>
          </Box>
          <List sx={{ paddingBottom: 0 }}>
            {newMenu?.map((item, idx) => (
              <ListItemButton
                key={idx}
                component={NavLink}
                to={item.path}
                sx={{
                  width: 'auto',
                  px: 0,
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                <ListItemText
                  primary={item.menu}
                  sx={{
                    '.MuiTypography-root': {
                      whiteSpace: 'nowrap',
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem' },
              width: '100%',
              textDecoration: 'none',
            }}
            component={NavLink}
            to="/"
          >
            Contact
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', md: '1.25rem' },
                width: '100%',
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box
                component={NavLink}
                to="https://www.facebook.com/ourgoodlife.id"
                target="_blank"
                color="white"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Box>
              <Box
                component={NavLink}
                to="https://www.instagram.com/ourgoodlife.id/"
                target="_blank"
                color="white"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Box>
              <Box component={NavLink} to="/" color="white">
                <FontAwesomeIcon icon={faTiktok} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{ mt: 7, textAlign: { xs: 'left', md: 'center' } }}>
        © 2026 Good Life Indonesia
      </Typography>
    </Box>
  );
}
