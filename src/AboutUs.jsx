import React from "react";
import {
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Paper,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Georgia", "Times New Roman", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#388e3c",
    },
    secondary: {
      main: "#ff6f00",
    },
  },
});

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          color: "black",
          zIndex: 1,
          paddingTop: 30,
          background: "#87CEEB",
        }}
      >
        <Paper elevation={20} style={{ padding: 100, borderRadius: 100 }}>
          <Typography
            variant="h3"
            gutterBottom
            style={{ color: theme.palette.primary.main }}
          >
            <center>Welcome to FloraFiesta,</center>
            <span
              role="img"
              aria-label="Plant Emoji"
              style={{
                fontFamily: "fantasy",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></span>{" "}
            🌱Embrace the Beauty of Nature,Right at Home!🌿
            <span
              role="img"
              aria-label="Plant Emoji"
              style={{
                fontFamily: "initial",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></span>
          </Typography>
          <br />
          <Typography variant="body1" paragraph style={{ color: "darkblue" }}>
            <strong>Dear Plant Enthusiast,</strong>
            <br />
            <br></br>
            Welcome to FloraFiesta – your digital sanctuary for all things green
            and growing! Whether you're a seasoned gardener or just getting
            started, our platform is designed to inspire, educate, and accompany
            you on your home gardening journey.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "darkblue" }}>
            <br></br>
            <strong>Why FloraFiesta?</strong>
            <br />
            <span
              role="img"
              aria-label="Flower Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🌻
            </span>{" "}
            Explore Endless Possibilities: Discover a world of plants, flowers,
            and herbs. From classics to rare gems, we've curated a collection
            that suits every garden.
            <br />
            <span
              role="img"
              aria-label="Book Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              📚
            </span>{" "}
            Learn and Grow: Our comprehensive guides and tips empower you with
            the knowledge to nurture your plants with love and care. Unearth the
            secrets of successful gardening, right at your fingertips.
            <br />
            <span
              role="img"
              aria-label="Rainbow Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🌈
            </span>{" "}
            Create Your Oasis: Turn your living space into a haven of
            tranquility. Whether you have a sprawling backyard or a cozy
            balcony, FloraFiesta is here to help you design your green paradise.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "darkblue" }}>
            <br></br>
            <strong>Get Started Today!</strong>
            <br />
            <span
              role="img"
              aria-label="Star Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🌟
            </span>{" "}
            Dive into our diverse plant catalog.{" "}
            <span
              role="img"
              aria-label="Book Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              📖
            </span>{" "}
            Explore articles and tutorials to enhance your gardening skills.{" "}
            <span
              role="img"
              aria-label="Flower Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🌺
            </span>{" "}
            Join our community of passionate gardeners to share experiences and
            tips.{" "}
            <span
              role="img"
              aria-label="Camera Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              📸
            </span>{" "}
            Showcase your beautiful garden creations.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "darkblue" }}>
            <br></br>
            Thank you for choosing FloraFiesta. Let's grow together and make
            every home a vibrant and thriving haven.
            <br />
            <br></br>
            Happy Gardening!
            <br />
            <strong>The FloraFiesta Team</strong>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AboutUs;
