import logo from './logo.svg';
import './App.css';

import MeuCompoenente from './components/MeuComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuCompoenente 
        titulo="Olá mundo"        
        />
      </header>
    </div>
  );
}

export default App;
