import React from 'react';
import HomeProfile from '../../assets/images/HomeProfile.JPG';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
						<div className="d-flex justify-content-around align-items-start">
							{/* <!-- Picture left side on Homepage --> */}
							<div className="img-home">
								<h1 className="title-overlaps">Hi! I'm Laura!</h1>
								<img
									src={HomeProfile}
									alt="Hi, I'm Laura"
									className="img py-3"
								/> 
							</div>
							<div className="presentation">
								<h2>Certified Online Business Manager</h2>
								<p>
									As certified Online Business Manager I help bloggers and
									business owners to reach larger milestones. I do this by
									strengthening the four pillars that make or break the health
									of your business: operations, launch- & project management,
									your team and money management.
								</p>
								<p>
									As former Finance Consultant I've successfully coached a
									three-digit-number of academic youngsters and entrepreneurs.
									Even though I enjoyed my job I missed working closer with my
									clients which lead to the transition to my current role. Now,
									I enjoy working with a handful of clients whom I can see
									sustainably grow their businesses day by day. Finally, I have
									also completed a Full Stack Developer Track to be able to
									fully dive into the process of creating digital products and I
									do enjoy blogging, too.
								</p>
								<a href="#" class="btn btn-primary">Services</a>
								<p>
									Being half German-half Spanish I ended up being quite a
									combination between northern efficiency and southern kindness
									and a true global citizen by heart. As much as I love being
									grounded and at home, I’m always ready to pack my back and hop
									on the next plane/train/boat to broaden my horizons and put
									myself out of my comfort zone! Feel free to have a look on my
									travel blog, my passion project, in case you get curious what
									I am all about.
								</p>
								<a href="#"class="btn btn-primary">More About Me</a>
							</div>
						</div>
						<div class="container-overview">
							{/* <!-- Overview Services --> */}
							<h2 className="text-center">Your take-off:</h2>
							<div className="cards">
								<div className="card-home">
									<h4>Launch- & Project Management</h4>
									<img
										src="#"
										alt="Illustration for Launch-  & Project Management"
									></img>
									<p></p>
								</div>
								<div className="card-home">
									<h4>Operations</h4>
									<img src="#" alt="Illustration for Operations"></img>
									<p></p>
								</div>
								<div className="card-home">
									<h4>Your Team</h4>
									<img src="#" alt="Illustration for Teamwork"></img>
									<p></p>
								</div>
								<div className="card-home">
									<h4>Money Management</h4>
									<img src="#" alt="Illustration for Money Management"></img>
									<p></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
