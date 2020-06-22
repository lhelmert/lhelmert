import React from 'react';
import AboutImage from '../../assets/images/AboutImage.jpg';
import AboutMeGraph from '../../assets/images/202006_AboutMeGraph.png';
import './About.css';

class About extends React.Component {
	render() {
		return (
			<div className="d-flex my-2 mx-3 py-2 px-2 flex-wrap">
				<div className="d-inline-flex justify-content-around align-items-start">
					<div className="col-12 col-md-9 col-sm-4">
						
						<div className="d-inline-flex">
							<div className="img-about">
								<img src={AboutImage} 
								alt="Laura Helmert, 'About Me' picture"
								className="img py-3">
								</img>
							</div>
							<div className="about-article">
							<h1>About</h1>
									<p className="text-justify">
											I love my job! I find great joy in growing personally and
											professionally, and I feel especially fulfilled when I can
											empower other high performers to believe in
											themselves and reach their goals. <br></br>
											I feel you: the over-motivated employee who jumped into the cold water in
											order to develop your true potential and now—look at you,
											you’ve become a start-up rockstar and business owner who
											has successfully started and grown your business, looking
											beyond profit! As scared as I was of leaving my corporate
											job, becoming an entrepreneur led me to discover and
											fulfill my true passion. <br></br>
											As Online Business Manager I get to work with amazing entrepreneurs whom I admire and
											help them grow their businesses in order to reach even
											more people. Don’t cut short your ideas and goals because
											you fear the time investment or are too busy managing your
											current daily tasks. With a strong spaceship and the right
											team onboard, you’ll be able to reach the stars and
											achieve more while working less. Ready to book your call?   
									</p>
									</div>
								</div>
									<div className="fun-graph">
										<img
										src={AboutMeGraph}
										alt="Random Facts about me"
										className="img py-3"
									/>
									</div>
							</div>
						</div>
			</div>
		);
	}
}

export default About;
