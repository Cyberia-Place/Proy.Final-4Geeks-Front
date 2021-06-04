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
			logIn: () => {}
		}
	};
};

export default getState;
