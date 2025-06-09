import './App.css';
import { MantineProvider, Container, Grid } from '@mantine/core';
import { Routes, Route, Router } from 'react-router-dom';
import About from './About.tsx';
import Projects from './Projects.tsx';
import Portfolio from './Portfolio.tsx';
import Contact from './Contact.tsx';


function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
          <Route
              path="/"
              element={
                <Grid grow gutter="xs">
                  <Grid.Col span={4}>
                    <img
                      src="/full-well.jpg"
                      className="profile"
                      alt="Chiara Sabato"
                      style={{ width: '400px', height: 'auto' }}
                    />
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <h1>Hi! My name is Chiara Sabato.</h1>
                    <p>
                      I graduated from UNC in May 2025 with a BS in Computer
                      Science with minors in Data Science and Italian.
                    </p>
                  </Grid.Col>
                </Grid>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

      </MantineProvider>
    </div>
  );
}

export default App;
