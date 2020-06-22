import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import './Services.css';

class Services extends React.Component {
	render() {
		return (
			<div class="d-flex my-2 mx-3 py-2 px-2 flex-wrap">
				<div class="row justify-content-around align-items-start">
					<div className="col-12 col-md-8 col-sm-3">
						<div classname="article-services">
							<h1 id="services">Services</h1>
							<div>
								<h3>Own your CEO role</h3>
								<p className="text-justify">
								Do you have these great ideas and goals for your business but now find yourself stepping back and thinking small because of the huge amount of time and energy these new projects might require? No more of that. </p>
								<h5 className="text-justify">
									"Focus on your business, while your processes are streamlined,
									centralized, and automated. Suddenly, you’ll find yourself
									achieving more, working less."
								</h5>	
							</div>
						</div>
					</div>	
				</div>
				<div className="row my-3 py-2 justify-content-between">
					<div className="col-12 col-md-10 col-sm-4">	
					<div className="overview-services">
						<h2>What to expect:</h2>
							<div className="pillars">
								<div className="card-pillar">
									
									<Image
										cloudName="lhelmert"
										publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760754/Icons/undraw_launch_day_4e04_vnhw5c.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>
									<h4>Launch- &amp; Project management</h4>
									<p>Planning, coordination & completion report. Creating a new product and connecting with your existing and future clients is the heart of your business. Let's treat it this way! </p>
								</div>
								<div class="card-pillar">
									
									<Image
										cloudName="lhelmert"
										publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760754/Icons/undraw_online_organizer_ofxm_a4kndc.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>
									<h4>Operations</h4>
									<p>Centralize, streamline, automate. You've reached 6 figures. Congrats! Now let's strengthen your business to reach larger milestones.</p>
								</div>
								<div className="card-pillar">
									<Image
										cloudName="lhelmert"
										publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760753/Icons/undraw_loving_story_0j59_q50mpz.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>
									<h4>Leadership</h4>
									<p>Coaching approach, clear communication and empowerment.  True leadership comes with getting to know the personal and professional goals of your team and empowering them to step up in their zone of genius. </p>
								</div>
								<div className="card-pillar">
									<Image
										cloudName="lhelmert"
										publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760753/Icons/undraw_environment_iaus_skmfkg.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>
									<h4>Money Management</h4>
									<p> Money, marketing & more. It's all about tracking the <em>right</em> numbers and getting the <em>right</em> information when looking at them.</p>
								</div>
							<div classname="Freebie">

								<div className="text-justify">
									<p>Give yourself and your business 90 days to 6 months to build a sustainable set of systems to scale your business and reach for the stars.</p>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		<div className="Freebie and Button">
				<div className="container-fluid align-items-center banner-freebie"></div>	
						<div>
								<p>Starting at 2500€/month</p>	
							<a href="#" className="btn btn-success-home">Book your call</a>
						</div>	
				</div>		
		</div>
		);
	}
}

export default Services;
