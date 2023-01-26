import './App.css';
import Vamos from './Components/Contact';
import Home from './Components/Home';
import Whatwedo from './Components/Whatdowedo';
import video from './Components/images/coding.mp4';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4"/>
            Your browser does not support HTML5 video.
            </video>
                  <header className="logo">
                <h2>JS Throne</h2>
                  </header>
              <nav>
                <ul className="main-nav">
                    <li className="main-nav-childs"><Link to="/">Home</Link></li>
                    <li className="main-nav-childs"><Link to="/whatwedo">What We Do ?</Link></li>
                    <div className="main-nav-childs" id="vamos-hidden-parent"><Link to="/vamos">Vamos Amigos!</Link>
                    <div id="vamos-hidden">
                      <li className='vamos-hd-pipe'>|</li>
                      <li className='vamos-hd-text'>You</li>
                      <li className='vamos-hd-pipe'>|</li>
                      <li className='vamos-hd-text'>Love</li>
                      <li className='vamos-hd-pipe'>|</li>
                      <li className='vamos-hd-text'>US</li>
                    </div>
                    </div>
                </ul>
            </nav>

            <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="whatwedo" element={<Whatwedo />} />
                      <Route path="vamos" element={<Vamos />} />
            </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
