import Navbar from './components/NavBar'
import Carroussell from './components/Carrousell';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div>
        <Carroussell/>
      </div>
      <main>
      <Card/>
      </main>
    </div>
  );
}

export default App;
