import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { Image } from 'mui-image';
import { NavBar } from '../components/NavBar';
import { HeroBanner } from '../components/HeroBanner';
import data from '../data/data.json';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Banner */}
      <HeroBanner />

      {/* About */}
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 10, mb: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '2rem', md: '3.5rem' },
              mb: 2,
              width: { xs: '100%', md: '70%' },
            }}
          >
            Good Life Indonesia
          </Typography>
          <Typography
            variant="large2"
            sx={{
              color: 'black',
              fontSize: { xs: '1rem', md: '1.25rem' },
              width: { xs: '100%', md: '70%' },
            }}
          >
            Good Life Indonesia is more than a marketing agency. We are strategic architects of
            brand success within Indonesia, combining international standards with a nuanced
            understanding of local consumer behaviour. <br />
            We are the strategic growth partner for international manufacturers — especially from
            China — helping them successfully enter, adapt, and flouriwsh in the Indonesian market.
            Through deep market insight, cultural intelligence, and performance-driven execution, we
            turn global ambition into local impact.
          </Typography>
        </Box>
      </Container>

      {/* Services */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 10,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '2rem', md: '3.5rem' },
              textAlign: 'center',
              mb: 2,
              width: '100%',
            }}
          >
            What We Do
          </Typography>
          <Grid container spacing={4} sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}>
            {data.services?.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Button
                  key={item.service}
                  variant="contained"
                  component={NavLink}
                  to={item.path}
                  sx={{
                    fontSize: { xs: '0.875rem', lg: '1rem' },
                    backgroundColor:
                      index === 1 || index === 3 || index === 5 ? 'primary.main' : 'secondary.rose',
                    color: index === 1 || index === 3 || index === 5 ? 'white' : 'text.secondary',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.service}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Success Stories */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 10,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '2rem', md: '3.5rem' },
              textAlign: 'center',
              mb: 2,
              width: '100%',
            }}
          >
            Success Stories
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/assets/banner-1.png"
                sx={{
                  width: '100%',
                  height: 'auto',
                }}
                loading="lazy"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography color="black">LOGO IMAGE</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'black',
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    width: '100%',
                  }}
                >
                  We proudly showcase brand stories that reflect our impact. Each case demonstrates
                  objective, strategy, execution, results, and ROI.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    component={NavLink}
                    to="/"
                    sx={{
                      fontSize: { xs: '0.875rem', lg: '1rem' },
                      backgroundColor: 'primary.main',
                      color: 'white',
                      textTransform: 'capitalize',
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Our Network */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            py: 10,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '2rem', md: '3.5rem' },
              textAlign: 'center',
              mb: 2,
              width: '100%',
            }}
          >
            Our Network
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 1, md: 6 },
            }}
          >
            <Box
              component="img"
              src="/assets/new-balance.png"
              sx={{
                width: 150,
                height: 'auto',
              }}
              loading="lazy"
            />
            <Box
              component="img"
              src="/assets/new-balance.png"
              sx={{
                width: 150,
                height: 'auto',
              }}
              loading="lazy"
            />
            <Box
              component="img"
              src="/assets/new-balance.png"
              sx={{
                width: 150,
                height: 'auto',
              }}
              loading="lazy"
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
