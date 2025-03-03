
import './App.css';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3.js';
import Article4 from './components/Article4.js';


function App() {
  return (
    <div className="App">
      <h1>Use Case Diagram</h1>
      <br></br>

  <main>kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?
    <br></br>
 <Article1 /> 
 </main>

 <main>kad to izmanto?
   <br></br>

 <Article2 /> 
 </main>

 <main>kādi UML elementi ir šajā diagrammā?
   <br></br>
 <Article3 /> 
 </main>

 <main>kāds ir piemērs ar skaidrojumu?
   <br></br>
 <Article4 /> 
 </main>
    </div>
  );
}

export default App;
