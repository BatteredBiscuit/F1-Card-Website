'use client';

import { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function OrganizationHome() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // If not signed in, redirect to the sign in/up page.
      router.push('/sign-in-up');
    }
  }, [user, router]);

  // Optionally, you can render a loading indicator while redirecting.
  if (!user) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navbar />
      <Container sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Your Organization Home
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Hello {user.first_name || user.email}, welcome back!
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          This is your organization's dashboard where you can manage your fleet, view analytics, and access other organization-specific features.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
