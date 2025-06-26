import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Dashboard from "./components/common/Dashboard";
import CourseContent from "./components/user/student/CourseContent";

export const UserContext = createContext();

function App() {
  const date = new Date().getFullYear();
  const [userData, setUserData] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      if (user && user !== undefined) {
        setUserData(user);
        setUserLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, userLoggedIn }}>
      <Box
        className="App"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "none",
        }}
      >
        <Router>
          <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                minHeight: "70vh",
                p: { xs: 1, sm: 3 },
                background: "rgba(255,255,255,0.95)",
              }}
            >
              <div className="content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  {/* <Route path="/about" element={<About />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
                  {userLoggedIn ? (
                    <>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route
                        path="/courseSection/:courseId/:courseTitle"
                        element={<CourseContent />}
                      />
                    </>
                  ) : (
                    <Route path="/login" element={<Login />} />
                  )}
                </Routes>
              </div>
            </Paper>
          </Container>
          <Box
            component="footer"
            sx={{
              background:
                "linear-gradient(90deg, #4f8cff 0%, #ffb347 100%)",
              color: "#fff",
              py: 2,
              mt: 4,
              boxShadow: 3,
            }}
          >
            <Typography variant="body2" align="center">
              © {date} Study App. All rights reserved.
            </Typography>
          </Box>
        </Router>
      </Box>
    </UserContext.Provider>
  );
}

export default App;


