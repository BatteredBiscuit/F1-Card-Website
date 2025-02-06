import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://github.com/BatteredBiscuit"
              target="_blank"
              aria-label="GitHub"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                  '@media (hover: none)': {
                    color: 'inherit',
                  },
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com/in/hayden-o" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/hayden_oneill" target="_blank" aria-label="X (Twitter)">
              <XIcon />
            </IconButton>
            <IconButton component="a" href="mailto:me@hayden-oneill.io" aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Made by Hayden O'Neill. All rights reserved.
          </Typography>

          <Link href="https://github.com/BatteredBiscuit/portfolio-website" target="_blank" color="primary" underline="hover" variant="body2">
            View Source Code
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
