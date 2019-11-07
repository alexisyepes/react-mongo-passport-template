import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "./style.css";

class index extends Component {
	_isMounted = false;

	state = {
		username: "",
		email: "",
		isLoading: true,
		error: false
	};

	async componentDidMount() {
		const accessString = localStorage.getItem("JWT");
		if (accessString == null) {
			this.setState({
				isLoading: false,
				error: true
			});
		} else {
			try {
				const response = await axios.get("/auth/profile", {
					headers: { Authorization: `JWT ${accessString}` }
				});

				this.setState({
					username: response.data.username,
					email: response.data.email,
					password: response.data.password,
					isLoading: false,
					error: false
				});
			} catch (error) {
				console.error(error.response);
				this.setState({
					error: true
				});
			}
		}
	}

	//Logout User
	handleLogOut(e) {
		e.preventDefault();
		localStorage.removeItem("JWT");
		window.location.href = "/login";
	}

	render() {
		const { isLoading, error } = this.state;
		if (error) {
			return (
				<div
					style={{
						marginTop: "60px",
						fontSize: "30px",
						height: "100vh"
					}}
				>
					...Problem fetching user data. Please login again
					{/* <span role="img" aria-label="Face With Rolling Eyes Emoji">
						🙄
					</span> */}
				</div>
			);
		}
		if (isLoading) {
			return (
				<div
					style={{
						marginLeft: "10%",
						fontSize: "30px",
						height: "100vh"
					}}
				>
					Loading User Data...
				</div>
			);
		}

		return (
			<div>
				<h1>PROFILE PAGE</h1>
				<Button
					className="buttonsControlPanel"
					color="warning"
					style={{
						fontSize: "20px",
						color: "navy",
						border: "solid 1px navy",
						marginBottom: "15px",
						textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
					}}
					onClick={this.handleLogOut}
				>
					Logout
				</Button>
			</div>
		);
	}
}

export default index;
