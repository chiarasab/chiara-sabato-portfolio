import './App.css';
import '@mantine/core/styles.css';
import React, { useState } from 'react';
import { MantineProvider, Container, Grid, Text } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import About from './About.tsx';
import Projects from './Projects.tsx';
import Portfolio from './Portfolio.tsx';
import Contact from './Contact.tsx';


function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
          <Route
              path="/"
              element={
                <Grid grow gutter="xs" align='center'>
                  <Grid.Col span="content">
                    <img
                      src="/full-well.jpg"
                      className="profile"
                      alt="Chiara Sabato"
                      style={{ width: '400px', height: 'auto', borderRadius: "15%" }}
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <h1>Hi! My name is Chiara Sabato.</h1>
                    <Text>
                      
                    </Text>
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
