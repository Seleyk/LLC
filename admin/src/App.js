import { Stack } from '@mui/system';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
        <Navbar />
        <Stack direction='row' sx={{ mt: "10px" }} >
          <Sidebar /> 
          <Home />

        </Stack>

    </div>
  )
}

export default App