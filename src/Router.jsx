import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Home/NavBar";
import LoginPage from "./LoginPage";
import Signup from "./Signup";

const router = createBrowserRouter([
  { path: "/home", element: <NavBar /> },
  { path: "/", element: <LoginPage /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
