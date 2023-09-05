import React from 'react';
import './App.scss';
import Button from './components/atoms/button';
import Home from './pages/home';
interface AppProps {
  title?: string;
}

const App:  React.FC<AppProps> = () => {
  return (
    <div className="App">
      Welcome to Front-End app
      <Home>Home page</Home>
      <Button type="button"> Button component </Button>
    </div>
  );
};

export default App;
