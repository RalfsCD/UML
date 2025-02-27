
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

  <main>kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?</main>
 <Article1 /> 

 <main>kad to izmanto?</main>
 <Article2 /> 

 <main>kādi UML elementi ir šajā diagrammā?</main>
 <Article3 /> 
 
 <main>kāds ir piemērs ar skaidrojumu?</main>
 <Article4 /> 

    </div>
  );
}

export default App;
