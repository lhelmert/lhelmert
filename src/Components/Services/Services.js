import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import './Services.css';

class Services extends React.Component {
	render() {
		return (
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
						<div id="article-services">
							<h1>Services</h1>
							<div>
								<h2>Own your CEO role</h2>
								<h4>
									Focus on your business, while your processes are streamlined,
									centralized, and automated. Suddenly, you’ll find yourself
									achieving more while, working less.
								</h4>
							</div>
							<div id="pillars">
								<h3>What's included:</h3>
								<div class="card-pillar">
									<h4>Launch- &amp; Project management</h4>
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
								</div>
								<div class="card-pillar">
									<h4>Operations</h4>
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
								</div>
								<div class="card-pillar">
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
								</div>
								<div class="card-pillar">
									<h4>Money Management</h4>
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
								</div>
							</div>
							<div>
								<p>Starting at 2500€/month</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
