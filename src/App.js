import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='GET THE APP'/>
      <Presentation/>
      <About image={aboutimage1} title='Download And Get The APP Now' button='DOWNLOAD'/>
      <Contact/>
    </div>
  );
}

export default App;
