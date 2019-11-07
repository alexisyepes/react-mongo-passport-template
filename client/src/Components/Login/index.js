import React, { Component } from "react";
// import API from '../utils/API';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Input } from "reactstrap";

import "./style.css";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
		errorMessage: "",
		loggedIn: false,
		showError: false,
		showNullError: false
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		if (email === "" || password === "") {
			this.setState({
				showError: false,
				showNullError: true,
				loggedIn: false
			});
		} else {
			try {
				const response = await axios.post("/auth/login", {
					email,
					password
				});
				localStorage.setItem("JWT", response.data.token);
				// this.props.history.push("/auth/admin");
				this.setState({
					loggedIn: true,
					showError: false,
					showNullError: false
				});
			} catch (error) {
				console.error(error.response);
				this.setState({
					errorMessage: error.response.data.message
				});
				console.log(error);
			}
		}
	};
	render() {
		if (this.state.loggedIn === true) {
			return <Redirect to={{ pathname: "/profile" }} />;
		}

		return (
			<div className="container signinPage">
				<div
					className="row justify-content-around"
					style={{
						background: "white",
						border: "10px solid #0A3055",
						marginTop: "20px",
						padding: "30px"
					}}
				>
					<div className="col-md-12">
						<Form
							// className="white"
							onSubmit={this.handleSubmit.bind(this)}
							style={{
								border: "10px double #0A3055",
								color: "black",
								marginBottom: "30px",
								marginTop: "60px",
								padding: "20px"
							}}
						>
							<h4
								className="grey-text text-darken-3"
								style={{ textAlign: "center", marginTop: "15px" }}
							>
								Sign In
							</h4>
							<hr style={{ background: "white" }}></hr>
							<FormGroup>
								<Input
									placeholder="Email"
									style={{ float: "right" }}
									type="email"
									id="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
								<Input
									placeholder="Password"
									style={{ float: "right", marginBottom: "15px" }}
									type="password"
									id="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
								<Button style={{ marginTop: "15px" }} className="btn-primary ">
									Login
								</Button>
							</FormGroup>
						</Form>
						<h4
							style={{
								textAlign: "center",
								color: "red",
								paddingBottom: "10px"
							}}
						>
							{this.state.errorMessage}
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn;
