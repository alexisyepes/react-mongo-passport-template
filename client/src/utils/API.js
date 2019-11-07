import axios from "axios";

export default {
	getUser: id => {
		return axios.get("/api/users/" + id);
	},
	addUser: newUser => {
		return axios.post("/auth/signup", newUser);
	},
	logginUser: existingUser => {
		return axios.post("/api/users/login", existingUser);
	}
};
