import type { PaletteMode } from '@mui/material';
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';

interface FooterProps {
  mode: PaletteMode;
}

const Footer = ({ mode }: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => mode === 'light' ? '#c299ff' : theme.palette.grey[900],
        color: (theme) => mode === 'light' ? '#1a1a1a' : theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              konomee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Understanding the US economy, one indicator at a time.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block" mb={1}>
              Economic Indicators
            </Link>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block" mb={1}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block">
              Contact
            </Link>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block" mb={1}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block" mb={1}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit" sx={{ textDecoration: 'none', opacity: 0.8 }} display="block">
              Disclaimer
            </Link>
          </Box>
        </Stack>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} konomee. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
