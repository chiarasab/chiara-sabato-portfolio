import * as React from 'react';
import './App.css';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Burger, Container, Group } from '@mantine/core';
import { NavLink, Link } from "react-router-dom"
import { useDisclosure } from '@mantine/hooks';
import classes from './styles/header.module.css';


const links = [
  { link: '/about', label: 'About Me' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact Me' },
];

export function Header() {
  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.active : ''}`
      }
    >
      {link.label}
    </NavLink>
  ));

  return (
    <MantineProvider>
      <div className="App-header">
        <Container size="md" className={classes.inner}>
        <Link to="/">
      <img src="/cs_logo.jpg" alt="Chiara Sabato Logo" className="logo" />
    </Link>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
        </Container>
      </div>
    </MantineProvider>
  );
}