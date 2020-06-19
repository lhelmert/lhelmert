import React from 'react';
import AboutImage from '../../assets/images/AboutImage.jpg';
import './About.css';

class About extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
						<div className="article-aboutd-flex justify-content-center align-items-start">
						<h1>About</h1>
							<div className="img-about">
								<img src={AboutImage} alt="Laura Helmert, 'About Me' picture"></img>
							</div>
							<div className="about-article">
								<h2>My Story</h2>
									<p>
											I love my job! I find great joy in growing personally and
											professionally, and I feel especially fulfilled when I can
											help empower other high performers to believe in
											themselves and reach their goals. I feel you: the
											over-motivated employee who jumped into the cold water in
											order to develop your true potential and now—look at you,
											you’ve become a start-up rockstar and business owner who
											has successfully started and grown your business, looking
											beyond profit! As scared as I was of leaving my corporate
											job, becoming an entrepreneur led me to discover and
											fulfill my true passion. As an Online Business Manager I
											get to work with amazing entrepreneurs whom I admire and
											help them grow their businesses in order to reach even
											more people. Don’t cut short your ideas and goals because
											you fear the time investment or are too busy managing your
											current daily tasks. With a strong spaceship and the right
											team onboard, you’ll be able to reach the stars and
											achieve more—while working less.
									</p>
							</div>
							<h3>Why you'll love working with me</h3>
							<div class="cards">
								<div className="card-about">
									<h4>Empathy and Discretion</h4>
									<p>
										I’ll make it easy for you to delegate, especially because I
										truly care about your business and your clients. For me it’s
										about (1) knowing what you want to get done and (2) how you
										want to get it done.
									</p>
								</div>
								<div className="card-about">
									<h4>Effective Efficiency.</h4>
									<p>
										Don’t let me fool you with my innocent-looking smile! Give
										me a task, and I’ll get it done, streamline it,, track the
										results, and provide feedback on potential areas of
										improvement. Do you want to customize this approach even
										further? Let's chat over a cup of coffe.
									</p>
								</div>
								<div className="card-about">
									<h4>Leadership</h4>
									<p>
										I’ll be there for you and your team and profit from a
										coaching approach to strengthen open communication and clear
										guidelines.
									</p>
								</div>
									<div className="fun-graph">
										<p>
											GET TO KNOW ME: My passion project (insert heart): my
											travel blog (insert link) My fave treat: the way to my
											heart is coffee with lactose-free milk (insert heart)
											Can’t live without: my family &amp; friends Random fact about
											me: I’m left-handed :)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default About;
