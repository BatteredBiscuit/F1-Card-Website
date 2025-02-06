// app/sign-in-up/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { SelectChangeEvent, useTheme } from '@mui/material';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/animations/FadeIn';
import { useAuth } from '@/context/AuthContext';

export default function AuthPage() {
  const theme = useTheme();
  const router = useRouter();
  const { signIn } = useAuth();

  const [tabValue, setTabValue] = useState(0);
  
  // For sign up: track whether the user is joining an existing organization or creating a new one.
  const [orgOption, setOrgOption] = useState<'join' | 'create'>('join');
  // Role state – default to "driver" for joining existing orgs.
  const [role, setRole] = useState<string>('driver');

  // Sign In form state.
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Sign Up form state.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [orgJoinCode, setOrgJoinCode] = useState('');
  const [orgName, setOrgName] = useState('');

  // Handle tab (Sign In / Sign Up) changes.
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Handle the organization option change.
  const handleOrgOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as 'join' | 'create';
    setOrgOption(value);
    // If creating a new organization, default to "owner"
    if (value === 'create') {
      setRole('owner');
    } else {
      // Otherwise, default to "driver"
      setRole('driver');
    }
  };

  // Updated role selection change with correct type.
  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  // Handle sign in submission.
  const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      email: signInEmail,
      password: signInPassword,
    };

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Sign in failed');
      } else {
        // Save the authenticated user into context.
        signIn(data.user);
        // Redirect to the organization home page.
        router.push('/organization-home');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while signing in.');
    }
  };

  // Handle sign up submission.
  const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      firstName,
      lastName,
      email: signUpEmail,
      password: signUpPassword,
      confirmPassword: signUpConfirmPassword,
      role,
      organizationOption: orgOption,
      joinCode: orgOption === 'join' ? orgJoinCode : undefined,
      organizationName: orgOption === 'create' ? orgName : undefined,
    };

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Sign up failed');
      } else {
        alert('Sign up successful');
        // Optionally clear the form or auto-switch to the Sign In tab.
        setTabValue(0);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        background: theme.palette.background.default,
      }}
    >
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
        <FadeIn>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" sx={{ mb: 3 }}>
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>

            {tabValue === 0 && (
              <Box component="form" onSubmit={handleSignInSubmit}>
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  Welcome Back
                </Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  required
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </Box>
            )}

            {tabValue === 1 && (
              <Box component="form" onSubmit={handleSignUpSubmit}>
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  Create Account
                </Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  label="First Name"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Last Name"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  required
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  required
                  value={signUpConfirmPassword}
                  onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                />

                {/* Organization Option */}
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <FormLabel component="legend">Organization Option</FormLabel>
                  <RadioGroup row value={orgOption} onChange={handleOrgOptionChange}>
                    <FormControlLabel
                      value="join"
                      control={<Radio />}
                      label="Join Existing Organization"
                    />
                    <FormControlLabel
                      value="create"
                      control={<Radio />}
                      label="Create New Organization"
                    />
                  </RadioGroup>
                </FormControl>
                {orgOption === 'join' ? (
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Organization Join Code"
                    type="text"
                    required
                    value={orgJoinCode}
                    onChange={(e) => setOrgJoinCode(e.target.value)}
                  />
                ) : (
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Organization Name"
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                )}

                {/* Role Selection */}
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="role-select-label">Select Role</InputLabel>
                  <Select
                    labelId="role-select-label"
                    value={role}
                    label="Select Role"
                    onChange={handleRoleChange}
                    required
                  >
                    {orgOption === 'create'
                      ? [<MenuItem key="owner" value="owner">Owner</MenuItem>]
                      : [
                          <MenuItem key="admin" value="admin">Admin</MenuItem>,
                          <MenuItem key="driver" value="driver">Driver</MenuItem>,
                          <MenuItem key="maintenance" value="maintenance">Maintenance</MenuItem>,
                        ]}
                  </Select>
                </FormControl>

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                  Sign Up
                </Button>
              </Box>
            )}
          </Paper>
        </FadeIn>
      </Container>
    </Box>
  );
}
