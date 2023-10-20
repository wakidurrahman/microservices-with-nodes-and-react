import './App.scss';
import Gallery from './components/molecules/gallery';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import TodoList from './components/molecules/todolist';

type AppProps = {
  id: string;
};

// Static Data
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const filteringPeople = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  imageId: 'bE7W1ji'
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist', 
  imageId: 'IOjWm71' 
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  imageId: 'IOjWm71' 
}];

export const peoplesSecond = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];


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
    <TodoList peoplesSecond={peoplesSecond} filteringPeoples={filteringPeople} peoples={people}>Hedy Lamarr's Todos</TodoList>
    <AccessAlarm />
    <ThreeDRotation color="primary" />
  </div>
);

export default App;
