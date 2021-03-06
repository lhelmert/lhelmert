import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import './Services.css';

class Services extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="d-flex my-2 mx-3 py-2 px-2 flex-wrap">
				<div className="row justify-content-around align-items-start">
					<div className="col-12 col-md-8 col-sm-3">
						<div className="article-services">
							<h1 id="services">Services</h1>
							<div>
								<h3>Own your CEO role</h3>
								<p className="text-justify">
									Do you have these great ideas and goals for your business but
									now find yourself stepping back and thinking small because of
									the huge amount of time and energy these new projects might
									require? No more of that.{' '}
								</p>
								<h5 className="text-justify">
									"Focus on your business, while your processes are streamlined,
									centralized, and automated. Suddenly, you’ll find yourself
									achieving more, working less."
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-around align-items-start">
					<div className="col-md-12">
						<h2 className="cards-heading">What to expect:</h2>
						<div className="row">
							<div className="col-md-3 col-sm-12 card-pillar">
								<div className="card-img-container">
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
								</div>
								<h4>Launch &amp; Project management</h4>
								<p className="text-justify">
									Planning, coordination &amp; completion report. Creating a new
									product and connecting with your existing and future clients
									is the heart of your business. Let's treat it this way!{' '}
								</p>
							</div>
							<div className="col-md-3 col-sm-12 card-pillar">
								<div className="card-img-container">
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
								</div>
								<h4>Operations</h4>
								<p className="text-justify">
									Centralize, streamline, automate. You've reached 6 figures.
									Congrats! Now let's strengthen your business to reach larger
									milestones.
								</p>
							</div>
							<div className="col-md-3 col-sm-12 card-pillar">
								<div className="card-img-container">
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
								</div>
								<h4>Leadership</h4>
								<p className="text-justify">
									Coaching approach, clear communication and empowerment. True
									leadership comes with getting to know the personal and
									professional goals of your team and empowering them to step up
									in their zone of genius.{' '}
								</p>
							</div>
							<div className="col-sm-12 col-md-3 card-pillar">
								<div className="card-img-container">
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
								</div>
								<h4>Money Management</h4>
								<p className="text-justify">
									Money, marketing &amp; more. It's all about tracking the{' '}
									<em>right</em> numbers and getting the <em>right</em>{' '}
									information when looking at them.
								</p>
							</div>
						</div>
						<div>
							<p className="text-right py-2">Starting at 2000€/month</p>
							<a
								href="#"
								onClick={this.props.switchSidebar}
								className="btn btn-success-home"
							>
								Book your call
							</a>
						</div>
					</div>
					<div>
						<h3>Download your Self-Asssessment Guide below</h3>
						<h5>Quickeck & next steps for your businesses' health:</h5>
					</div>
				</div>
				<div className="col-md-12">
					<div className="container-fluid align-items-center banner-freebie">
						<div className="form-container">
							<form
								className="form-inline"
								action="https://laurahelmert.us10.list-manage.com/subscribe/post?u=e66e150a8c725b407d9e78cd3&amp;amp;id=ce34172212"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								target="_blank"
							>
								<div className="form-group mb-2">
									<label htmlFor="name" className="sr-only">
										First Name
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
										name="NAME"
										placeholder="First Name"
										required
									/>
								</div>
								<div className="form-group mx-sm-3 mb-2">
									<label htmlFor="email" className="sr-only">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="EMAIL"
										placeholder="Email"
										required
									/>
								</div>
								<button type="submit" className="btn btn-primary mb-2">
									Get now
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
