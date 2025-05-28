import './App.css';
import { MantineProvider, Container, Grid } from '@mantine/core';
import {Header} from './Header.tsx';



function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <header className="App-header">
      <Header></Header>
      <Grid grow gutter="xs">
        <Grid.Col span={4}>
          <img src={"/full-well.jpg"} className="profile" alt="Chiara Sabato" style={{ width: '400px', height: 'auto' }}/>
        </Grid.Col>
        <Grid.Col span={4}>
          <p>
            My name is Chiara Sabato
          </p>
        </Grid.Col>
      </Grid>
      </header>
      </MantineProvider>
    </div>
  );
}

export default App;
