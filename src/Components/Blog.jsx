import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

const Blog = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to [Your Home Gardening App]
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        🌱 Embrace the Beauty of Nature, Right at Home! 🌿
      </Typography>

      <Typography variant="body1" paragraph>
        Dear Plant Enthusiast,
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to [Your Home Gardening App] – your digital sanctuary for all
        things green and growing! Whether you're a seasoned gardener or just
        getting started, our platform is designed to inspire, educate, and
        accompany you on your home gardening journey.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Dive into our diverse plant catalog
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Explore articles and tutorials
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Join our community
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Showcase your garden
          </Button>
        </Grid>
      </Grid>

      <Typography variant="body1" paragraph>
        Thank you for choosing [Your Home Gardening App]. Let's grow together
        and make every home a vibrant and thriving haven.
      </Typography>

      <Typography variant="h6" align="center" paragraph>
        Happy Gardening!
      </Typography>

      {/* Add any other components or features here */}
    </Container>
  );
};

export default Blog;
