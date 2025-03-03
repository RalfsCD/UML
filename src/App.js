
import './App.css';
import Article1 from './components/article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3.js';
import Article4 from './components/Article4.js';


function App() {
  return (
    <section class="y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div><Article1 /></div>
    <div><Article2 /></div>
    <div><Article3 /></div>
    <div><Article4 /></div>
  </section>
  );
}

export default App;
