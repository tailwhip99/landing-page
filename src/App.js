import React from 'react'
import './styles/App.scss'



import Intro from './components/Intro'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import AnchorLink from "react-anchor-link-smooth-scroll";
function App() { 
  let enable=false;

  const enableHeader  = () => {

    const header = document.querySelector('.mobile-header');
  console.log("working")
  if (enable === false) {
    header.style.top = '6%';
    enable =true;
  } else {
    header.style.top = '-100%';
    enable = false
  }
 
  

  }
  return (
    <div className="App">
      <div className="header">
    <h1>melwebs ®</h1>
    <div className="menu">
        <AnchorLink className="link"  href="#intro"><h3>BEVEZETÉS</h3></AnchorLink>
        <AnchorLink  className="link" href="#about"><h3>RÓLUNK</h3></AnchorLink>
        <AnchorLink  className="link" href="#services"> <h3>SZOLGÁLTATÁSAINK</h3></AnchorLink>
   
        <AnchorLink className="link"  href="#contacts"> <h4 className="contacts"><b><i>KAPCSOLAT</i></b></h4></AnchorLink>
        <input type="checkbox" id="menu_checkbox"  onClick={enableHeader}/>
<label className="hamburger"  for="menu_checkbox">
  <div></div>
  <div></div>
  <div></div>
</label>

        
    </div>
</div>
<div className="mobile-header" >
<AnchorLink className="link"  href="#intro"><h3>BEVEZETÉS</h3></AnchorLink>
        <AnchorLink  className="link" href="#about"><h3>RÓLUNK</h3></AnchorLink>
        <AnchorLink  className="link" href="#services"> <h3>SZOLGÁLTATÁSAINK</h3></AnchorLink>
   
        <AnchorLink className="link"  href="#contacts"> <h4 className="contacts"><b><i>KAPCSOLAT</i></b></h4></AnchorLink>
</div>
    
      <Intro />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
