import Navbar from '../components/NavBar'
import Carroussell from '../components/Carrousell';
import Card from '../components/Card'
import React from 'react';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div>
        <Carroussell/>
      </div>
      <main >
     
          <Card/>
          
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default Home;