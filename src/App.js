import logo from './logo.svg';
import './App.css';
import TextEntryPage from './pages/TextEntryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextEntryPage />
      </header>
    </div>
  );
}

export default App;
