import './App.css';
import * as React from 'react';
import { MantineProvider, Container, Grid } from '@mantine/core';
import { Header } from './Header.tsx';


export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <Grid>
        <p>
          I am a recent graduate from UNC Chapel Hill where I received a Bachelor's of Science in Computer Science with minors in Data Science and Italian.
          I am passionate about using Computer Science and technology to make meaningful impacts on the world. 
          Through my internships in Software Engineering and Cloud Engineering, I got the opportunity to explore technologies I had never used before and grow my technical interests.
        </p>
        <p>
          At Ally, I worked as a Software Engineer Intern on a DevSecOps team where I spent my summer learning about the team's day-to-day tasks and worked alongside the team to develop my summer project.
          With the help of my manager and the taleneted engineers on my team, I got my first look at tools like AWS and began developing with reactive frontend frameworks.
          The objective for my project was to develop a project dashboard tool that allow users to visualize the health and status of projects within our business unit.
          The dashboard would pull data using GitLab APIs and utilized AWS's API Gateway, Lambda, and DynamoDB to retreive and store all the project details.
          To visualize the same details in GitLab would require not only finding each project but also clicking through each individual tab to see each metric.
          This dashboard reduces the need for all the extra clicking and allows users to search for their specific project and see all the important details in one step.
        </p>
      </Grid>
    </div>
  );
}

About()