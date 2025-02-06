// src/styles/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

const getTheme = (isDarkMode: boolean): Theme =>
  createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#60a5fa' : '#2563eb', // Modern blue
        light: isDarkMode ? '#93c5fd' : '#3b82f6',
        dark: isDarkMode ? '#2563eb' : '#1d4ed8',
      },
      secondary: {
        main: isDarkMode ? '#a855f7' : '#7c3aed', // Purple accent
        light: isDarkMode ? '#c084fc' : '#8b5cf6',
        dark: isDarkMode ? '#7c3aed' : '#6d28d9',
      },
      background: {
        default: isDarkMode ? '#0f172a' : '#f8fafc', // Slate dark/light
        paper: isDarkMode ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#f1f5f9' : '#0f172a',
        secondary: isDarkMode ? '#cbd5e1' : '#475569',
      },
    },
    typography: {
      h1: { fontWeight: 600, letterSpacing: '-0.5px' },
      h2: { fontWeight: 600, letterSpacing: '-0.5px' },
      h4: { fontWeight: 600, letterSpacing: '-0.5px' },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
      body1: { lineHeight: 1.8 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDarkMode ? '#1e293b' : '#2563eb',
            color: '#ffffff',
            boxShadow: isDarkMode
              ? '0 1px 3px 0 rgba(0, 0, 0, 0.4)'
              : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiPaper: {
        // Custom variant to enable hover effect (lift) only on devices that support hover.
        variants: [
          {
            props: { variant: 'hoverEnabled' },
            style: {
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode
                    ? '0 8px 12px -1px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)'
                    : '0 8px 12px -1px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
                },
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            borderRadius: 12,
            // Default (non-hover) shadow
            boxShadow: isDarkMode
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
            transition: 'none',
            '&:hover': {
              transform: 'none',
              boxShadow: isDarkMode
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
            },
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'hoverEnabled' },
            style: {
              transition: 'all 0.2s ease-in-out',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  transform: 'translateY(-1px)',
                },
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            padding: '6px 16px',
            '&.MuiButton-containedPrimary': {
              color: '#ffffff',
            },
            transition: 'none',
            '&:hover': {
              transform: 'none',
            },
          },
        },
      },
      MuiChip: {
        variants: [
          {
            props: { variant: 'hoverEnabled' },
            style: {
              transition: 'all 0.2s ease-in-out',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  transform: 'translateY(-1px)',
                },
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            borderRadius: 8,
            transition: 'none',
            '&:hover': {
              transform: 'none',
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            color: isDarkMode ? '#f1f5f9' : '#0f172a',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: isDarkMode ? '#334155' : '#f1f5f9',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: isDarkMode ? '#60a5fa' : '#2563eb',
              },
            },
            '& .MuiInputBase-input': {
              color: isDarkMode ? '#f1f5f9' : '#0f172a',
            },
            '& .MuiInputLabel-root': {
              color: isDarkMode ? '#cbd5e1' : '#475569',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? '#334155' : '#e2e8f0',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            color: isDarkMode ? '#f1f5f9' : '#0f172a',
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#334155' : '#f1f5f9',
            '&:hover': {
              backgroundColor: isDarkMode ? '#475569' : '#e2e8f0',
            },
            '&.Mui-focused': {
              backgroundColor: isDarkMode ? '#334155' : '#f1f5f9',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? '#f1f5f9' : '#0f172a',
          },
          paragraph: {
            color: isDarkMode ? '#f1f5f9' : '#0f172a',
          },
          body1: {
            color: isDarkMode ? '#f1f5f9' : '#0f172a',
          },
          body2: {
            color: isDarkMode ? '#cbd5e1' : '#475569',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: 'transparent' },
          html: { backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc' },
        },
      },
    },
  });

export default getTheme;
