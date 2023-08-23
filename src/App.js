import { gsap , Power3} from 'gsap';
import Header from './components/Header';
import Content from './components/Content';
import Loader from './components/Loader';

function App() {

  const t1 = new gsap.timeline();
  const ease = Power3.easeOut;

  return (
    <div className='hero'>
      <Loader timeline={t1} ease={ease}/>
    <Header timeline={t1} ease={ease}/>
    <Content timeline={t1} ease={ease}/>
    </div>
  );
}

export default App;
