import { Box, Container, Typography } from '@mui/material';
import { useResponsiveImage } from '../utils/utils';

export const HeroBanner = () => {
  const heroImage = useResponsiveImage({
    xs: '/assets/hero_banner_mobile.png',
    md: '/assets/hero_banner.png',
  });

  return (
    <Box
      sx={{
        height: { xs: '60vh', md: '100vh' },
        width: '100%',
        py: 'auto',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* overlay biar text kebaca */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.35)',
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontSize: {xs: '2rem', md: '3rem', lg: '3.5rem'},
            mb: 2,
            width: '70%'
          }}
        >
          Driving Global Brands to Local Success
        </Typography>
      </Container>
    </Box>
  );
};