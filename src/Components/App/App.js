import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Sidebar from 'react-sidebar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Vlog from '../Vlog/Vlog';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sidebarVisible: false,
		};
	}

	switchSidebar() {
		this.setState({
			sidebarVisible: !this.state.sidebarVisible,
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Sidebar
						sidebar={<Contact />}
						open={this.state.sidebarVisible}
						onSetOpen={(visible) =>
							this.setState({
								sidebarVisible: visible,
							})
						}
						styles={{
							sidebar: {
								background: 'white',
								maxWidth: '45%',
								minWidth: '45%',
							},
						}}
						pullRight={true}
					>
						<Header switchSidebar={this.switchSidebar.bind(this)} />
						<div className="App-Presentation">
							<Switch>
								<Route exact path="/">
									<Redirect to="/home" />
								</Route>
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
					</Sidebar>
				</div>
			</Router>
		);
	}
}

export default App;
