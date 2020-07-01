import {
	faChevronDown,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
	Button,
	Container,
	Divider,
	Form,
	List,
	TextArea,
	Segment,
	Transition,
} from 'semantic-ui-react';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formCollapsed: true,
		};
	}

	render() {
		const { formCollapsed } = this.state;

		return (
			<Segment className="contact-form">
				<h3
					onClick={() =>
						this.setState({
							formCollapsed: !formCollapsed,
						})
					}
				>
					<FontAwesomeIcon
						icon={(formCollapsed && faChevronRight) || faChevronDown}
					/>
					&nbsp; <a href="#">Submit an Inquiry</a>
				</h3>
				<Transition.Group animation="vertical flip" duration={250}>
					{!formCollapsed && (
						<Container>
							<form
								className="ui form"
								method="post"
								action="https://laurahelmert.us10.list-manage.com/subscribe/post?u=e66e150a8c725b407d9e78cd3&amp;amp;id=ce34172212"
							>
								<Form.Field>
									<label>First Name</label>
									<input name="FIRST_NAME" placeholder="First Name" />
								</Form.Field>
								<Form.Field>
									<label>Last Name</label>
									<input name="LAST_NAME" placeholder="Last Name" />
								</Form.Field>
								<Form.Field>
									<label>Email Address</label>
									<input
										name="EMAIL"
										type="email"
										placeholder="Email Address"
									/>
								</Form.Field>
								<Form.Field
									name="COMMENTS"
									control={TextArea}
									label="Comments"
									placeholder="Tell me more about your project..."
								/>
								<Button type="submit">Submit</Button>
							</form>
						</Container>
					)}
				</Transition.Group>
				<Divider hidden clearing />
				<List>
					<List.Item>
						<List.Icon name="female" />
						<List.Content>Laura Helmert</List.Content>
						<Divider />
					</List.Item>
					<List.Item>
						<List.Icon name="marker" />
						<List.Content>Berlin, GERMANY</List.Content>
						<Divider />
					</List.Item>
					<List.Item>
						<List.Icon name="mail" />
						<List.Content>
							<a href="mailto:laura@laurahelmert.com">laura@laurahelmert.com</a>
						</List.Content>
						<Divider />
					</List.Item>
				</List>
			</Segment>
		);
	}
}

export default Contact;
