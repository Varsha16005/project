import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
// import backgroundImage from "./Project/Images/loginbg.jpeg";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.shutterstock.com/image-photo/nature-green-leaf-garden-summer-260nw-1195048972.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Paper
          elevation={10}
          style={{
            width: "35%",
            height: "500px",
            marginTop: "100px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            // backgroundImage: url(${backgroundImage}),
          }}
        >
          <center>
            <Typography variant="h1" style={{ fontSize: "50px" }}>
              Login Page
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter email"
            />
            <br></br>
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type="password"
              id="outlined-basic"
              variant="outlined"
              autoComplete="new-password"
              placeholder="Enter password"
            >
              Email Id &emsp;&emsp;
            </TextField>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/home">
              <Button variant="contained">Login</Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/signup" underline="hover">
              {"Don't have an account?"}
            </Link>
            &emsp;&emsp;&emsp;
            {/* <Link href="#" underline="hover">
          {"forgot password?"}
        </Link> */}
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
