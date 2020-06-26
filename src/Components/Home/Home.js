import React from 'react';
import HomeProfile from '../../assets/images/HomeProfile.jpg';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
			<div className="d-flex my-2 mx-3 py-2 px-2 flex-wrap">
				<div className="d-inline-flex justify-content-around align-items-start row">
					<div className="col-12 col-md-10 col-sm-4">
						{/* <!-- row Presentation with Picture --> */}
						<div className="row">
							<div className="img-home col-md-5">
								<h2 className="title-overlaps">Hi! I'm Laura!</h2>
								<img
									src={HomeProfile}
									alt="Hi, I'm Laura"
									className="img py-3"
								/>
							</div>
							<div className="col-md-7 presentation">
								<h3>Certified Online Business Manager</h3>
								<p className="text-justify">
									<strong>Ready to make things happen? </strong> I help bloggers
									and startup rockstars to reach larger milestones by
									strengthening the four pillars that make or break the health
									of your business: (1) systems &amp; smooth operations, (2)
									leadership &amp; an empowered team, (3) project &amp;
									launch-management as well as (4) easy money management to
									sustainably grow your business. Ready to lead your creative
									business to your dream destination?
								</p>
								<Link to="/Services" className="btn btn-success-home">
									Services
								</Link>
								<h3>About Me</h3>
								<p className="text-justify">
									As former finance consultant I've successfully coached 100+
									students, young professionals and entrepreneurs on their
									financial and career goals. Even though I enjoyed my job, I
									wanted to work more closely with my clients:{' '}
									<strong>
										Now, I enjoy working with a handful of clients whom I can
										assist in reaching larger milestones with better business
										systems.
									</strong>{' '}
									<br></br> I do create myself, too. Feel free to have a look at
									my brand theambassador.eu where I enjoy creative and
									journalistic blogging and I create my own digital products.
								</p>
								<Link to="/About" className="btn btn-success-home">
									About
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Overview Services --> */}
				<div className="col-md-12">
					<h2 className="cards-heading">Why you'll love working with me: </h2>
					<div className="row">
						<div className="col-md-4 col-sm-12 card-home">
							<div className="card-img-container">
								<Image
									cloudName="lhelmert"
									publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760754/Icons/undraw_synchronize_ccxk_rvtuhp.png"
								>
									<Transformation
										width="300"
										height="300"
										gravity="face"
										crop="thumb"
									/>
								</Image>
							</div>
							<h4>Empathy</h4>
							<p className="text-justify">
								{' '}
								I’ll make it easy for you to delegate, mainly because I
								genuinely care about your business, your team and your clients.
								For me it’s about (1) knowing what you want to get done and (2)
								how you want to get it done.
							</p>
						</div>
						<div className="col-md-4 col-sm-12 card-home">
							<div className="card-img-container">
								<Image
									cloudName="lhelmert"
									publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760753/Icons/undraw_loving_story_0j59_q50mpz.png"
								>
									<Transformation
										width="300"
										height="300"
										gravity="face"
										crop="thumb"
									/>
								</Image>
							</div>
							<h4>Leadership</h4>
							<p className="text-justify">
								{' '}
								Whether as Team Assistant for a raising Global Consultancy or as
								the oldest sister of four: For me leadership is about
								empowerment. I’ve learned to listen and know who is doing what
								and when and what they need to be motivated to grow on a
								professional and personal level. Because a business only grows
								together with its team.
							</p>
						</div>
						<div className="col-md-4 col-sm-12 card-home">
							<div className="card-img-container">
								<Image
									cloudName="lhelmert"
									publicId="https://res.cloudinary.com/lhelmert/image/upload/v1592760700/Icons/undraw_in_progress_ql66_ckdmy7.svg"
								>
									<Transformation
										width="250"
										height="250"
										gravity="face"
										crop="thumb"
									/>
								</Image>
							</div>
							<h4>Effective Efficiency</h4>
							<p className="text-justify">
								{' '}
								Don’t let me fool you with my innocent-looking smile! Give me a
								task, and I’ll get it done, streamline it, track the results,
								and provide feedback on potential areas of improvement. Do you
								want to customize this approach even further? Let's chat over a
								cup of coffee/tea/apple juice.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
