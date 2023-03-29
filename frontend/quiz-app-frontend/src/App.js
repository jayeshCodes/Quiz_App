import logo from './logo.svg';
import './App.css';
import { NextUIProvider, createTheme, Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import {Sidebar} from './components/sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import { Upload } from './components/upload';
import { Profile } from './components/profile';
import Tests from './components/tests';



const darkTheme = createTheme({ type: "dark" });

function App() {
  return (
  
    <NextUIProvider theme={darkTheme}>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/tests" element={<Tests/>} />
      </Routes>
    </Sidebar>
    </BrowserRouter>
    </NextUIProvider>

  );
}

export default App;
