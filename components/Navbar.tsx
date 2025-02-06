// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {user ? 'Organisation Home' : 'FleetMaster'}
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} href="/organization-home">
              Organisation Home
            </Button>
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/pricing">
              Pricing
            </Button>
            <Button color="inherit" component={Link} href="/sign-in-up">
              Sign In / Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
