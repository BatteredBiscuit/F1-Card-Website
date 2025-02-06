import '@mui/material/Paper';
import '@mui/material/Button';
import '@mui/material/Chip';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    hoverEnabled: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    hoverEnabled: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    hoverEnabled: true;
  }
}
