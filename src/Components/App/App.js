import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Vlog from '../Vlog/Vlog';
import Footer from '../Footer/Footer';



class App extends React.Component {
  render() {
    return (
      <div>
      <div className="App-Header">
        <Header />
        <div className="App-Presentation">
          <Home />
          <About />
          <Services />
          <Vlog />
        </div>
        <div className="App-Footer">
          <Footer />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
