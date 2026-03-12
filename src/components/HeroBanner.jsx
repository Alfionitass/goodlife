import { Box, Container, Typography } from '@mui/material';

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        pt: '80px',
        backgroundImage: 'url(/assets/red-and-black-banner.jpg)',
        backgroundSize: 'cover',
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
            fontSize: {xs: '2.25rem', md: '3rem', lg: '3.5rem'},
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