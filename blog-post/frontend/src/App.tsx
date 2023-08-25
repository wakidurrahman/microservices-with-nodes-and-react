import './App.scss';
import Button from './components/atoms/button';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     Welcome to Front-End app

     <Home>Home page</Home>
     <Button type='button'> Button component </Button>
    </div>
  );
}

export default App;
