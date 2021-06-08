import { PostAdd } from "@material-ui/icons";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			signUp: async (email, contrasena, nombre) => {
				let myHeader = new Headers();
				myHeader.append("content-type", "application/json");
				let options = {
					headers: myHeader,
					body: JSON.stringify({ email, contrasena, nombre }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.APPURL + "/signup", options);
					let data = await response.json();
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			logIn: () => {},

			getProfile: async () => {
				let token = localStorage.getItem("token");

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "GET",
						headers: myHeaders,
						redirect: "follow"
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/user/profile", requestOptions);
						let data = await response.json();
						setStore({ userData: data });
					} catch (error) {
						console.log(error);
					}
				}
			}
		}
	};
};

export default getState;
