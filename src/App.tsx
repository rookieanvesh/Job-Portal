import './App.css';
import { MantineProvider, createTheme} from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      'coral-red': [
        '#fff1f1',
        '#ffdfdf',
        '#ffc5c5',
        '#ff9d9d',
        '#ff6464',
        '#ff3d3d',
        '#ed1515',
        '#c80d0d',
        '#a50f0f',
        '#881414',
        '#4b0404',
      ],
      'woodsmoke': [
        '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#1a1a1a',
      ] 
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
