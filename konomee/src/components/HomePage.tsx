import { useState } from "react";
import type { PaletteMode } from "@mui/material";
import { Box, Container, Stack, Typography } from "@mui/material";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import Gauge from "./Gauge";

interface HomePageProps {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const HomePage = ({ mode, toggleTheme }: HomePageProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onMenuClick={handleDrawerToggle} />

      <Menu
        open={mobileOpen}
        onClose={handleDrawerToggle}
        mode={mode}
        toggleTheme={toggleTheme}
      />

      {/* Body */}
      <Container
        component="main"
        sx={{
          flex: 1,
          py: 8,
        }}
      >
        {/* Economic Health Gauge */}
        <Box sx={{ mb: 8 }}>
          <Gauge value={83} countryCode="US" />
        </Box>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to konomee
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Your comprehensive source for US economic indicators and insights
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ justifyContent: "space-around" }}
        >
          <Box sx={{ textAlign: "center", p: 3, flex: 1 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Real-Time Data
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Access up-to-date economic indicators and market trends
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 3, flex: 1 }}>
            <Typography variant="h5" gutterBottom color="secondary">
              Clear Insights
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Understand complex economic data with clear visualizations
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 3, flex: 1 }}>
            <Typography variant="h5" gutterBottom color="warning">
              Actionable Intelligence
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Make informed decisions based on comprehensive analysis
            </Typography>
          </Box>
        </Stack>
      </Container>

      <Footer mode={mode} />
    </Box>
  );
};

export default HomePage;
