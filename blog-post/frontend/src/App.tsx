import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import './App.scss';


console.log(dayjs)
function App() {

  const [now, setNow] = useState<Dayjs | null>(null);

console.log(dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'))
  return (
    <div className="App">
     Welcome to Front-End app
     <p>{JSON.stringify(now)}</p>
      <button onClick={() => setNow(dayjs())}>Update Time</button>

    </div>
  );
}

export default App;
