import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import './App.scss';
import Button from './components/atoms/button';
import Home from './pages/home';


console.log(dayjs)
function App() {

  const [now, setNow] = useState<Dayjs | null>(null);

console.log(dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'))
  return (
    <div className="App">
     Welcome to Front-End app

     <Home>Home page</Home>
     <Button type='button'> Button component </Button>
     <p>{JSON.stringify(now)}</p>
      <button onClick={() => setNow(dayjs())}>Update Time</button>

    </div>
  );
}

export default App;
