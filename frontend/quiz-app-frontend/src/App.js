import logo from './logo.svg';
import './App.css';
import { NextUIProvider, createTheme, Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const darkTheme = createTheme({ type: "dark" });

function App() {
  return (
    <div>
    <NextUIProvider theme={darkTheme}>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Dashboard
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Upload</Navbar.Link>
        </Navbar.Content>
      </Navbar>

    </NextUIProvider>
    </div>
  );
}

export default App;
