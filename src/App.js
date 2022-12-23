import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';



export default function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Buttons />
      </main>
    </div>
  );
}