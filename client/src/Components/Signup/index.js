import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Form, FormGroup, Input } from "reactstrap";
// import { Link } from "react-router-dom";

class SignUp extends Component {
	state = {
		username: "",
		lastName: "",
		firstName: "",
		email: "",
		phone: "",
		password: "",
		password2: "",
		errorMsg: ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		if (
			!this.state.username ||
			!this.state.lastName ||
			!this.state.firstName ||
			!this.state.email ||
			!this.state.phone ||
			!this.state.password ||
			!this.state.password2
		) {
			return;
		}
		if (this.state.password !== this.state.password2) {
			this.setState({
				errorMsg: "Passwords don't match!"
			});
			console.log("Passwords don't match!");
			return;
		}
		if (this.state.password.length < 6) {
			this.setState({
				errorMsg: "Password must be at least 6 carachters long!"
			});
			return;
		}

		API.addUser({
			username: this.state.username,
			lastName: this.state.lastName,
			firstName: this.state.firstName,
			phone: this.state.phone,
			email: this.state.email,
			password: this.state.password
		})
			// .then(alert("You can login now!"))
			.then(
				this.setState({
					username: "",
					lastName: "",
					firstName: "",
					email: "",
					phone: "",
					password: "",
					password2: ""
				})
			)
			.then(res => console.log(res))
			.catch(error => console.log(error));
		window.location.href = "/login";
	};

	render() {
		return (
			<div className="container">
				<div
					className="row"
					style={{
						background: "white",
						border: "10px solid #0A3055",
						marginTop: "10px",
						padding: "20px"
					}}
				>
					<div className="col-sm-12">
						<Form
							onSubmit={this.handleSubmit}
							style={{
								border: "10px double #0A3055",
								color: "black",
								marginBottom: "30px",
								paddingLeft: "20px",
								paddingRight: "20px"
							}}
						>
							<h4
								className="grey-text text-darken-3"
								style={{ textAlign: "center", marginTop: "15px" }}
							>
								Register
							</h4>
							<FormGroup>
								<hr style={{ background: "grey", marginTop: "10px" }}></hr>
								<div className="input-field">
									<label htmlFor="username">* Username</label>
									<Input
										className="form-control"
										type="text"
										id="username"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="lastName">* Last Name</label>
									<Input
										className="form-control"
										type="text"
										id="lastName"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="firstName">* First Name</label>
									<Input
										className="form-control"
										type="text"
										id="firstName"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="phone">* Phone</label>
									<Input
										className="form-control"
										type="text"
										id="phone"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="email">Email</label>
									<Input
										className="form-control"
										type="text"
										id="email"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="password">* Password</label>
									<Input
										className="form-control"
										type="password"
										id="password"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<label htmlFor="password2">* Confirm Password</label>
									<Input
										className="form-control"
										type="password"
										id="password2"
										onChange={this.handleChange}
									/>
								</div>
								<div className="input-field">
									<Button
										style={{ marginTop: "30px" }}
										className="btn-primary lighten-1 z-depth-0"
									>
										Create Account
									</Button>
								</div>
							</FormGroup>
						</Form>
						<h4
							style={{
								textAlign: "center",
								color: "red",
								paddingBottom: "10px"
							}}
						>
							{this.state.errorMsg}
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
