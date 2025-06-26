import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AllCourses from './AllCourses';

const Home = () => {
  return (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Study App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Toolbar>
      </AppBar>

      <Box id="home-container" className="first-container" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', mt: 6 }}>
        <Box className="content-home" sx={{ position: 'relative', left: '5%', background: 'rgba(255,255,255,0.85)', p: 5, borderRadius: 4, boxShadow: 3, maxWidth: 480 }}>
          <Typography variant="h3" fontWeight={800} color="primary" gutterBottom sx={{ letterSpacing: 2 }}>
            Small App, Big Dreams:
            <br /> Elevating Your Education
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/register" sx={{ mt: 2, fontWeight: 600, borderRadius: 2 }}>
            Explore Courses
          </Button>
        </Box>
      </Box>
      <Container className="second-container" sx={{ borderRadius: 4, boxShadow: 2, py: 4, mt: -6, background: 'rgba(255,255,255,0.95)' }}>
        <Typography variant="h4" align="center" fontWeight={700} color="primary" sx={{ mb: 4, mt: '1em' }}>
          Trending Courses
        </Typography>
        <AllCourses />
      </Container>
    </>
  );
};

export default Home;


