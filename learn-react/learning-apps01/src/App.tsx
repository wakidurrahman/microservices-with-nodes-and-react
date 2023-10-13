import './App.scss';
import Gallery from './components/molecules/gallery';

type AppProps = {
  id: string;
};

const App: React.FC<AppProps> = ({ id }) => (
  
    <div id='1' className="app">
      <header className="header">
      Hello
      </header>
      <Gallery title='Amazing scientists' />
    </div>
 
);


export default App;
