import { gsap , Power3} from 'gsap';
import Loader from './components/Loader';
import Wrapper from './components/Wrapper';

function App() {

  const t1 = new gsap.timeline();
  const ease = Power3.easeOut;

  return (
    <div className='hero'>
      <Loader timeline={t1} ease={ease}/>
      <Wrapper timeline={t1} ease={ease}/>
    </div>
  );
}

export default App;
