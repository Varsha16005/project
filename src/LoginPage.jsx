// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   createTheme,
//   ThemeProvider,
//   Paper,
//   Typography,
//   TextField,
//   Button,
// } from "@mui/material";
// import leaf from "./leaf.jpg";
// // import { Home } from "@mui/icons-material";
// // import backgroundImage from "./Project/Images/loginbg.jpeg";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const LoginPage = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${leaf})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <ThemeProvider theme={theme}>
//         <Paper
//           elevation={10}
//           style={{
//             width: "35%",
//             height: "500px",
//             marginTop: "25px",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             // backgroundImage: url(${backgroundImage}),
//           }}
//         >
//           <br></br>
//           <center>
//             <Typography style={{ fontSize: "50px", fontFamily: "initial" }}>
//               Login Page
//             </Typography>
//             <br></br>
//             <br></br>
//             <TextField
//               id="outlined-basic"
//               label="Email"
//               type="email"
//               variant="outlined"
//               placeholder="Enter email"
//             />
//             <br></br>
//             <br></br>
//             <TextField
//               label="Password"
//               type="password"
//               id="outlined-basic"
//               variant="outlined"
//               autoComplete="new-password"
//               placeholder="Enter password"
//             >
//               Email Id &emsp;&emsp;
//             </TextField>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Link to="/home">
//               <Button variant="contained">Login</Button>
//             </Link>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Link to="/signup" underline="hover">
//               <center>{"Don't have an account?"}</center>
//             </Link>
//             &emsp;&emsp;&emsp;
//             {/* <Link href="#" underline="hover">
//           {"forgot password?"}
//         </Link> */}
//           </center>
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default LoginPage;

// import React from "react";
// // import { samvid } from "samvid";
// import { Link } from "react-router-dom";
// import {
//   createTheme,
//   ThemeProvider,
//   Paper,
//   Typography,
//   TextField,
//   Button,
// } from "@mui/material";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const LoginPage = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Video background */}
//       <video
//         className="videoTag"
//         autoPlay
//         loop
//         muted
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       >
//         <source
//           src="https://mylivewallpapers.com/nature/leaves-live-wallpaper/"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       <ThemeProvider theme={theme}>
//         <Paper
//           elevation={10}
//           style={{
//             width: "80%",
//             height: "500px",
//             marginTop: "100px",
//             backgroundColor: "rgba(255, 255, 255, 0.7)",
//             padding: "20px",
//             position: "relative", // Make Paper position relative to allow z-index
//             zIndex: 1, // Ensure Paper appears above the video
//           }}
//         >
//           <center>
//             {/* Rest of your content */}
//             <Typography
//               variant="h1"
//               style={{ fontSize: "50px", color: "black" }}
//             >
//               Login Page
//             </Typography>
//             <br></br>
//             <br></br>
//             <br></br>
//             <TextField
//               id="outlined-basic"
//               label="Email"
//               type="email"
//               variant="outlined"
//               placeholder="Enter email"
//             />
//             <br></br>
//             <br></br>
//             <br></br>
//             <TextField
//               label="Password"
//               type="password"
//               id="outlined-basic"
//               variant="outlined"
//               autoComplete="new-password"
//               placeholder="Enter password"
//             >
//               Email Id &emsp;&emsp;
//             </TextField>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Link to="/home">
//               <Button variant="contained">Login</Button>
//             </Link>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Link to="/signup" underline="hover">
//               {"Don't have an account?"}
//             </Link>
//             &emsp;&emsp;&emsp;
//             {/* <Link href="#" underline="hover">
//           {"forgot password?"}
//         </Link> */}
//             {/* ... other components */}
//           </center>
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default LoginPage;

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
import leaves from "./leaves.mp4";
// import leaf from "./leaf.jpg";
// import { Home } from "@mui/icons-material";
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
        // backgroundImage: `url(${leaf})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={leaves} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={100}
          style={{
            width: "35%",
            height: "500px",
            marginTop: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            position: "relative", // Make sure the position is relative
            zIndex: 1,
            // backgroundImage: url(${backgroundImage}),
          }}
        >
          <br></br>
          <center>
            <Typography style={{ fontSize: "50px", fontFamily: "initial" }}>
              Login Page
            </Typography>
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
              <center>{"Don't have an account?"}</center>
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
