import React from 'react';
import HomeProfile from '../../assets/images/HomeProfile.JPG';
import { Image, Transformation } from 'cloudinary-react';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
			
			<div className="d-flex my-2 mx-3 py-2 px-2 flex-wrap">
				<div className="row justify-content-around align-items-start">
					<div className="col-12 col-md-8 col-sm-3">
					{/* <!-- row Presentation with Picture --> */}
						<div className="d-inline-flex">
							<div className="img-home">
								<h2 className="title-overlaps">Hi! I'm Laura!</h2>
								<img
									src={HomeProfile}
									alt="Hi, I'm Laura"
									className="img py-3"
								/> 
							</div>
							<div className="presentation">
								<h4>Certified Online Business Manager</h4>
								<p className="text-justify">
								Ready to make things happen? As certified Online Business Manager I help bloggers and startup rockstars to reach larger milestones strengthening the four pillars that make or break the health of your business: (1) systems & smooth operations, (2) leadership & an empowered team, (3) project & launchmanagement as well as (4) easy money management to sustainably grow your business and reach larger milestones.
								</p>
								<p className="text-justify">
									I've successfully coached and advised over one hundred students, young professionals and entrepreneurs as former finance consultant. Even though I enjoyed my job, I wanted to work more closely with my clients: <strong>Now, I enjoy working with a handful of clients whom I can assist in managing their business.</strong>
								</p>
								<a href="#" class="btn btn-success-home">Let's chat ☕</a>
								<h3>My story</h3>
								<p className="text-justify">
								 I do create myself, too. Feel free to check out my brand theambassador.eu where I enjoy creative and journalistic blogging and I create my own digital products.<br></br> 
								 Being half German-half Spanish, I ended up being quite a combination between northern efficiency and southern kindness and a true global citizen by heart. As much as I love being grounded and at home, I’m always ready to pack my bag and hop on the next plane/train/boat to broaden my horizon and put myself out of my comfort zone (where growth happens)!
								</p>
								<a href="#"class="btn btn-success-home">More About Me</a>
							</div>
						</div>
					</div>
				</div>
					{/* <!-- Overview Services --> */}
				<div className="row my-3 py-2 justify-content-between">
					<div className="col-12 col-md-10 col-sm-4">	
						<h2>Why you'll love working with me: </h2>
						<div className="cards">
							<div className="card-home">
								<h4>Empathy</h4>
								<Image
										cloudName="dnmqwxoud"
										publicId="v1592325091/Icons/undraw_launch_day_4e04_abttit.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
								</Image>

									<p className="text-justify"> I’ll make it easy for you to delegate, mainly because I genuinely care about your business, your team and your clients. For me it’s about (1) knowing what you want to get done and (2) how you want to get it done.</p>
							</div>
							<div className="card-home">
									<h4>Leadership</h4>

									<Image
										cloudName="dnmqwxoud"
										publicId="v1592325091/Icons/undraw_launch_day_4e04_abttit.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>
									
									<p className="text-justify"> Whether as Team Assistant for a raising start-up & Global Consultancy or a the oldest sister of four: For me leadership is about empowerment. I’ve learned to listen and know who is doing what and when and what they need to be motivated to grow on a professional and personal level. Because a business only grows together with its team. 
									</p>
							</div>
							<div className="card-home">
									<h4>Effective Efficiency</h4>

									<Image
										cloudName="dnmqwxoud"
										publicId="v1592325091/Icons/undraw_launch_day_4e04_abttit.png"
									>
										<Transformation
											width="150"
											height="150"
											gravity="face"
											crop="thumb"
										/>
									</Image>

									<p className="text-justify"> Don’t let me fool you with my innocent-looking smile! Give me a task, and I’ll get it done, streamline it, track the results, and provide feedback on potential areas of improvement. Do you want to customize this approach even further? Let's chat over a cup of coffee/tea/apple juice.</p>.
							</div>
						</div>
						<div className="services">
							<a href="#"class="btn btn-success-homes">Services</a>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
