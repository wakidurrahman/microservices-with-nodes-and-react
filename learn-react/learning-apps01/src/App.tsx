import './App.scss';
import Gallery from './components/molecules/gallery';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import TodoList from './components/molecules/todolist';

type AppProps = {
  id: string;
};

const App: React.FC<AppProps> = ({ id }) => (
  <div id="1" className="app">
    <header className="header">Hello</header>
    <Gallery title="Amazing scientists" />

    {/* Components: UI building blocks */}

    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
    <TodoList>Hedy Lamarr's Todos</TodoList>
    <AccessAlarm />
    <ThreeDRotation color="primary" />
  </div>
);

export default App;
