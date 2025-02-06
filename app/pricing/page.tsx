'use client';

import { Box, Container, Typography, Paper, Grid, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/animations/FadeIn';

// Define a TypeScript interface for the pricing tiers.
interface Tier {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained" | "text";
}

export default function Pricing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Pricing tiers configuration typed with the Tier interface.
  const tiers: Tier[] = [
    {
      title: 'Basic',
      price: '$49/month',
      description: [
        'Real-Time Vehicle Tracking',
        'Basic Reporting Tools',
        'Email Support',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outlined',
    },
    {
      title: 'Standard',
      price: '$99/month',
      description: [
        'Everything in Basic',
        'Predictive Maintenance',
        'Driver Performance Monitoring',
        'Priority Email Support',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      description: [
        'Custom Solutions',
        'Dedicated Account Manager',
        'Advanced Analytics',
        '24/7 Phone Support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: theme.palette.background.default }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        {/* Page Header */}
        <FadeIn>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Pricing Plans
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Choose the plan that best fits your fleet management needs and scale your operations with confidence.
          </Typography>
        </FadeIn>

        {/* Pricing Tiers */}
        <Grid container spacing={4} justifyContent="center">
          {tiers.map((tier, index) => (
            <Grid item xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4} key={index}>
              <FadeIn delay={0.1 * (index + 1)}>
                <Paper
                  elevation={3}
                  sx={{
                    p: isMobile ? 3 : 5,
                    textAlign: 'center',
                    borderRadius: 3,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(to right bottom, #1e293b, #0f172a)'
                      : 'linear-gradient(to right bottom, #ffffff, #f0f4f8)',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {tier.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    sx={{ mb: 2, fontWeight: 700 }}
                  >
                    {tier.price}
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3 }}>
                    {tier.description.map((line, idx) => (
                      <Typography component="li" key={idx} sx={{ mb: 1 }}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                  <Button variant={tier.buttonVariant} size="large">
                    {tier.buttonText}
                  </Button>
                </Paper>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
