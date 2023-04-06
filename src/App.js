import Intro from './Components/intro/Intro';
import Topbar from './Components/topbar/Topbar';
import "./App.scss"
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Works from './Components/works/Works';
import Testimonials from './Components/Testimonials/Testimonials';
import { useState } from 'react';
import Menu from './Components/menu/Menu';

function App() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className='App'>
     <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
     <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      
     </div>
    </div>
  );
}

export default App;
