import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class Sidebar extends Component {
	componentDidMount() {
		var elem = document.querySelector(".sidenav");
		// eslint-disable-next-line
		var instance = M.Sidenav.init(elem, {
			edge: "left",
			inDuration: 250
		});
	}

	render() {
		return (
			<div>
				<ul id="slide-out" className="sidenav">
					<li />
					<li>
						<a href="/">
							<i className="material-icons">Logo</i>Home
						</a>
					</li>
					<li>
						<a href="/aboutus">About This site</a>
					</li>
					{/* <li>
						<div className="divider" />
					</li> */}
					{/* <li>
						<a className="subheader">Subheader</a>
					</li> */}
					<li>
						<a className="waves-effect" href="/signup">
							Signup
						</a>
					</li>
					<li>
						<a className="waves-effect" href="/login">
							Login
						</a>
					</li>
				</ul>
				<a href="/" data-target="slide-out" className="sidenav-trigger">
					<i className="small material-icons menuTitle">Menu</i>
				</a>
			</div>
		);
	}
}

export default Sidebar;
