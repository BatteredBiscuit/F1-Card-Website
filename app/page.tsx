'use client';

import { Box, Container, Typography, Paper, useMediaQuery, Grid, Button } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import FadeIn from '@/components/animations/FadeIn';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: theme.palette.background.default }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        {/* Header Section */}
        <FadeIn>
          <Paper
            elevation={3}
            sx={{
              p: isMobile ? 4 : 6,
              background: isDarkMode
                ? 'linear-gradient(to right bottom, #1e293b, #0f172a)'
                : 'linear-gradient(to right bottom, #ffffff, #f0f4f8)',
              borderRadius: 3,
              textAlign: 'center',
              mb: 5,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 700,
                backgroundImage: isDarkMode
                  ? 'linear-gradient(45deg, #60a5fa, #93c5fd)'
                  : 'linear-gradient(45deg, #1d4ed8, #3b82f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Fleet Management Co
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: theme.palette.text.secondary,
                fontWeight: 500,
              }}
            >
              Comprehensive Fleet Management & Operational Excellence
            </Typography>
          </Paper>
        </FadeIn>

        {/* Services & Expertise Sections */}
        <Grid container spacing={4}>
          {[
            {
              title: 'Our Expertise',
              content: (
                <>
                  <Typography paragraph>
                    Fleet Management Co is dedicated to empowering fleet operators with advanced tools and actionable insights.
                    Our robust platform leverages real-time data analytics, cutting-edge telematics, and AI-driven predictive
                    maintenance to ensure every vehicle in your fleet is performing at its best.
                  </Typography>
                  <Typography paragraph>
                    We specialize in integrating complex systems into a single, intuitive interface that simplifies the management
                    of large fleets. From scheduling and maintenance to driver safety and regulatory compliance, our solutions
                    are built to scale with your business.
                  </Typography>
                </>
              ),
            },
            {
              title: 'Fleet Management Solutions',
              content: (
                <>
                  <Typography paragraph>
                    Our comprehensive suite of solutions covers every aspect of fleet management:
                  </Typography>
                  <Typography component="ul" sx={{ pl: 4 }}>
                    <li>
                      <Typography component="span">
                        <strong>Real-Time Vehicle Tracking:</strong> Monitor fleet location and status in real time, ensuring timely deliveries and optimal routing.
                      </Typography>
                    </li>
                    <li>
                      <Typography component="span">
                        <strong>Predictive Maintenance:</strong> Use advanced analytics to forecast and prevent vehicle breakdowns before they occur.
                      </Typography>
                    </li>
                    <li>
                      <Typography component="span">
                        <strong>Driver Performance Monitoring:</strong> Enhance safety and efficiency through detailed insights into driver behavior.
                      </Typography>
                    </li>
                    <li>
                      <Typography component="span">
                        <strong>Route Optimization:</strong> Reduce fuel consumption and delivery times with dynamic, data-driven routing.
                      </Typography>
                    </li>
                    <li>
                      <Typography component="span">
                        <strong>Compliance & Reporting:</strong> Simplify regulatory compliance with automated reporting and audit trails.
                      </Typography>
                    </li>
                  </Typography>
                  <Typography paragraph>
                    Designed with scalability in mind, Fleet Management Co seamlessly integrates with your existing systems while providing a
                    user-friendly experience that minimizes downtime and maximizes productivity.
                  </Typography>
                </>
              ),
            },
            {
              title: 'Why Partner with Fleet Management Co?',
              content: (
                <>
                  <Typography paragraph>
                    Our commitment to excellence and innovation sets us apart. When you choose FleetMaster, you are partnering with a team
                    that understands the unique challenges of fleet management and is dedicated to driving your success.
                  </Typography>
                  <Typography paragraph>
                    From initial consultation to ongoing support, our experts work closely with you to customize solutions that address
                    your specific operational needs and goals. We are committed to enhancing safety, reducing costs, and improving overall
                    fleet performance.
                  </Typography>
                  <Typography paragraph>
                    Join the growing number of industry leaders who trust FleetMaster to deliver a reliable, secure, and efficient fleet
                    management solution.
                  </Typography>
                </>
              ),
            },
          ].map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FadeIn delay={0.1 * (index + 1)}>
                <Paper
                  elevation={3}
                  sx={{
                    p: isMobile ? 3 : 4,
                    height: '100%',
                    background: isDarkMode
                      ? 'linear-gradient(to right bottom, #1e293b, #0f172a)'
                      : 'linear-gradient(to right bottom, #ffffff, #f0f4f8)',
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                  {section.content}
                </Paper>
              </FadeIn>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action Section */}
        <FadeIn delay={0.4}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" gutterBottom>
              Ready to Transform Your Fleet Operations?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Contact us today to learn how FleetMaster can drive efficiency, reduce operational costs, and enhance your fleet’s performance.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get in Touch
            </Button>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
