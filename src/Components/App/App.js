import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Vlog from '../Vlog/Vlog';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div className="App-Header">
						<Header />
						<div className="App-Presentation">
							<Switch>
								<Route path="/home">
									<Home />
								</Route>
								<Route path="/about">
									<About />
								</Route>
								<Route path="/services">
									<Services />
								</Route>
								<Route path="/vlog">
									<Vlog />
								</Route>
							</Switch>
						</div>
						<div className="App-Footer">
							<Footer />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
