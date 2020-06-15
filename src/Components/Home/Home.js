import React from 'react';

import './HomeProfile.jpg';
import './Home.css';

export class Home extends React.Component {
	render() {
		const HomeProfile = {
			src: './HomeProfile.jpg',
			alt: "Hi, I'm Laura!",
			width: '200px',
		};
		return (
			<div className="container-home">
				<div className="row justify-content-center">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
						<div className="article-home">
							{/* <!-- Picture left side on Homepage --> */}
							<div class="img-home">
								<img
									src={HomeProfile.src}
									alt={HomeProfile.alt}
									width={HomeProfile.width}
								/>
							</div>
							<div class="presentation">
								<h1>Hi! I'm Laura!</h1>
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
								<a href="#">Services</a>
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
								<a href="#">More About Me</a>
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
