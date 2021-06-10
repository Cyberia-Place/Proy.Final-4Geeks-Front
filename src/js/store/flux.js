import { PostAdd } from "@material-ui/icons";
import swal from "sweetalert";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuario: null
		},
		actions: {
			loadSomeData: () => {
				if (localStorage.getItem("usuario")) {
					setStore({ usuario: JSON.parse(localStorage.getItem("usuario")) });
				}
			},

			signUp: async (email, contrasenia, nombre) => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");
				let options = {
					headers: myHeaders,
					body: JSON.stringify({ email, contrasenia, nombre }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.BACK_URL + "/signup", options);
					let data = await response.json();

					if (data.message) {
						getActions().showMessage("Error!", data.message, "error");
					} else {
						getActions().showMessage("Registro exitoso!", "Usuario registrado exitosamente", "success");
					}
				} catch (error) {
					getActions().showMessage("Error!", "Error en el servidor", "error");
				}
			},

			logIn: async (email, contrasenia) => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");
				let options = {
					headers: myHeaders,
					body: JSON.stringify({ email, contrasenia }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.BACK_URL + "/login", options);
					let data = await response.json();

					if (data.message) {
						getActions().showMessage("Error!", data.message, "error");
					} else {
						localStorage.setItem("usuario", JSON.stringify(data.usuario));
						localStorage.setItem("token", data.token);
						localStorage.setItem("expires", data.expires);

						setStore({ usuario: data.usuario });

						getActions().showMessage("Login exitoso!", "Usuario logeado exitosamente", "success");

						window.location.href = "/inicio";
					}
				} catch (error) {
					getActions().showMessage("Error!", "Error en el servidor", "error");
				}
			},

			logout: () => {
				localStorage.clear();
				setStore({ usuario: null });
				window.location.href = "/";
			},

			showMessage: (title, text, icon) => {
				swal({ title, text, icon, button: false });
			},

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
