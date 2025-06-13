import './App.css';
import '@mantine/core/styles.css';
import React, { useState, useEffect } from 'react';
import { MantineProvider, Text, Grid, Button, Transition, Box } from '@mantine/core';
import { IconFileDownload } from '@tabler/icons-react';
import '@mantine/core/styles/Button.css';

export default function About() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <MantineProvider>
      <div className="App">
        <h1>About Me</h1>
        <div style={{ padding: 20 }}>
          <Box
            maw={200}
            pos="relative"
            style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
          >
            <Button
              component="a"
              href="/Sabato-Resume.pdf"
              download
              leftSection={<IconFileDownload size={15} />}
            >
              Download My Resume
            </Button>
          </Box>
        </div>
        <div>
        </div>
        <Transition
          mounted={opened}
          transition="slide-up"
          duration={400}
          timingFunction="ease"
        >
          {(styles = "App") => (
            <div className="body" style={styles}>
              <Grid grow gutter="xs">
                <Grid.Col span={2}><img
                  src="/ph_balloons.jpeg"
                  className="profile"
                  alt="Pearl Hacks Balloons"
                  style={{ width: 'auto', height: '150px', borderRadius: "15%" }}
                /></Grid.Col>
                <Grid.Col span={2}><img
                  src="/headshot.jpeg"
                  className="profile"
                  alt="Chiara Sabato Headshot"
                  style={{ width: 'auto', height: '150px', borderRadius: "15%" }}
                /></Grid.Col>
                <Grid.Col span={2}><img
                  src="/ph_stage.jpeg"
                  className="profile"
                  alt="Pearl Hacks presentation"
                  style={{ width: 'auto', height: '150px', borderRadius: "15%" }}
                /></Grid.Col>
                <Grid.Col span={2}><img
                  src="/dinner_image.png"
                  className="profile"
                  alt="Career Services Dinner"
                  style={{ width: 'auto', height: '150px', borderRadius: "15%" }}
                /></Grid.Col>
                <Grid.Col span={8}>
                  I am a recent graduate from UNC Chapel Hill where I received a Bachelor's of Science in Computer Science with minors in Data Science ands Italian.
                  I am passionate about using Computer Science and technology to make meaningful impacts on the world.
                  Through my internships in Software Engineering and Cloud Engineering, I got the opportunity to explore technologies I had never used before and grow my technical interests.<br /><br />
                </Grid.Col>
                <Grid.Col span={8}>
                  At Ally, I worked as a Software Engineer Intern on a DevSecOps team where I spent my summer learning about the team's day-to-day tasks and worked alongside the team to develop my summer project.
                  With the help of my manager and the talented engineers on my team, I got my first look at tools like AWS and began developing with reactive frontend frameworks.
                  The objective for my project was to develop a project dashboard tool that allow users to visualize the health and status of projects within our business unit.
                  The dashboard would pull data using GitLab APIs and utilized AWS's API Gateway, Lambda, and DynamoDB to retrieve and store all the project details.
                  To visualize the same details in GitLab would require not only finding each project but also clicking through each individual tab to see each metric.
                  This dashboard reduces the need for all the extra clicking and allows users to search for their specific project and see all the important details in one step.
                </Grid.Col>
              </Grid>
            </div>
          )}
        </Transition>
      </div>
    </MantineProvider >

  );
}
