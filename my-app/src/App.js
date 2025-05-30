import './App.css';
import { MantineProvider, Container, Grid } from '@mantine/core';
import { Header } from './Header.tsx';
import About from './About.tsx';
import Projects from './Projects.tsx';
import Portfolio from './Portfolio.tsx';
import Contact from './Contact.tsx';


function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <header className="App-header">
          <Header/>
          <Grid grow gutter="xs">
            <Grid.Col span={3}>
              <img src={"/full-well.jpg"} className="profile" alt="Chiara Sabato" style={{ width: '400px', height: 'auto' }} />
            </Grid.Col>
            <Grid.Col span={4}>
              <h1>
                Hi! My name is Chiara Sabato.
              </h1>
              <p>I graduated from UNC in May 2025 with a BS in Computer Science with minors in Data Science and Italian.</p>
            </Grid.Col>
          </Grid>
        </header>
      </MantineProvider>
    </div>
  );
}

export default App;
