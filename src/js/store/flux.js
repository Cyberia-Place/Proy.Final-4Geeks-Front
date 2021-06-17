import { PostAdd } from "@material-ui/icons";
import swal from "sweetalert";
import moment from "moment";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuario: null,
			googleLoged: false
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

			forgotPassword: async email => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");
				let options = {
					headers: myHeaders,
					body: JSON.stringify({ email }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.BACK_URL + "/forgot-password", options);
					let data = await response.json();

					if (data.message) {
						getActions().showMessage("Error!", data.message, "error");
					} else {
						getActions().showMessage(
							"Exito!",
							"Se a enviado un correo con el link para restablecer la contraseña",
							"success"
						);
					}
				} catch (error) {
					getActions().showMessage("Error!", "Error en el servidor", "error");
				}
			},

			resetPassword: async (token, nuevaContrasenia) => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");
				let options = {
					headers: myHeaders,
					body: JSON.stringify({ nuevaContrasenia, token }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.BACK_URL + "/reset-password", options);
					let data = await response.json();

					if (data.message) {
						getActions().showMessage("Error!", data.message, "error");
					} else {
						getActions().showMessage("Exito!", "Se ha restablecido la contraseña", "success");
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
						setStore({ googleLoged: false });

						getActions().showMessage("Login exitoso!", "Usuario logeado exitosamente", "success");

						window.location.href = "/inicio/alumno";
					}
				} catch (error) {
					getActions().showMessage("Error!", "Error en el servidor", "error");
				}
			},

			googleLogIn: async tokenId => {
				let myHeaders = new Headers();
				myHeaders.append("content-type", "application/json");
				let options = {
					headers: myHeaders,
					body: JSON.stringify({ tokenId }),
					method: "POST"
				};

				try {
					let response = await fetch(process.env.BACK_URL + "/google-login", options);
					let data = await response.json();

					if (data.message) {
						getActions().showMessage("Error!", data.message, "error");
					} else {
						localStorage.setItem("usuario", JSON.stringify(data.usuario));
						localStorage.setItem("token", data.token);
						localStorage.setItem("expires", data.expires);

						setStore({ usuario: data.usuario });
						setStore({ googleLoged: true });

						getActions().showMessage("Login exitoso!", "Usuario logeado exitosamente", "success");

						window.location.href = "/inicio/alumno";
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

			getProfile: async user => {
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
						let response = await fetch(
							process.env.BACK_URL + `/user/profile${user.id ? `/${user.id}` : ""}`,
							requestOptions
						);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							setStore({ userData: data });
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			getStats: async user => {
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
						let response = await fetch(
							process.env.BACK_URL + `/user/stats${user.id ? `/${user.id}` : ""}`,
							requestOptions
						);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							setStore({ userStats: data });
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			updateProfile: async data => {
				let token = localStorage.getItem("token");

				let body = {};

				if (data.imagen) Object.assign(body, { imagen: data.imagen });
				if (data.nombre) Object.assign(body, { nombre: data.nombre });
				if (data.descripcion) Object.assign(body, { descripcion: data.descripcion });
				if (data.edad) Object.assign(body, { edad: data.edad });
				if (data.ocupacion) Object.assign(body, { ocupacion: data.ocupacion });
				if (data.idioma) Object.assign(body, { idioma: data.idioma });
				if (data.pais) Object.assign(body, { pais: data.pais });
				if (data.url) Object.assign(body, { url: data.url });

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "PUT",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/user/update", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Usuario actualizado exitosamente", "success");
							getActions().getProfile({});
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			updatePassword: async data => {
				let token = localStorage.getItem("token");

				let body = {
					contraseniaPrevia: data.contraseniaPrevia,
					contraseniaNueva: data.contraseniaNueva
				};

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "PUT",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/user/updatePassword", requestOptions);
						let data = await response.json();
						console.log(data);
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Contraseña actualizada exitosamente", "success");
							getActions().getProfile({});
						}
					} catch (error) {
						console.log(error);
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			darClases: async () => {
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
						let response = await fetch(process.env.BACK_URL + "/clases", requestOptions);
						let data = await response.json();
						setStore({ clases: data });
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			darClasesUsuario: async () => {
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
						let response = await fetch(process.env.BACK_URL + "/user/nextClases", requestOptions);
						let data = await response.json();
						setStore({ userClases: data });
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			darClasesDocente: async () => {
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
						let response = await fetch(process.env.BACK_URL + "/teacher/nextClases", requestOptions);
						let data = await response.json();
						setStore({
							calendario: data.map(elem => {
								return moment(elem.fecha).toDate();
							})
						});
						let teacherClases = [];
						for (let i = 0; i < data.length; i += 3) {
							let pedazo = data.slice(i, i + 3);
							teacherClases.push(pedazo);
						}
						setStore({
							teacherClases: teacherClases
						});
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			darCategorias: async () => {
				try {
					let response = await fetch(process.env.BACK_URL + "/categories");
					let data = await response.json();
					setStore({ categories: data });
				} catch (error) {
					getActions().showMessage("Error!", "Error en el servidor", "error");
				}
			},

			agendarMentoria: async data => {
				let token = localStorage.getItem("token");

				let body = {
					nombre: data.nombre,
					fecha: moment(data.fecha).format("YYYY-MM-DD"),
					hora_inicio: moment(data.hora_inicio).format("LT"),
					hora_fin: moment(data.hora_fin).format("LT"),
					categorias: data.categorias,
					precio: data.precio
				};

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "POST",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/class", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Mentoria agregada exitosamente", "success");
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			filtrarCards: async filter => {
				let token = localStorage.getItem("token");
				// day tiene que ser del tipo: ?week_day=2
				// hour tiene que ser del tipo: ?hora_inicio=14
				// en caso de seleccionar dia y hora tiene que ser: ?week_day=2&hora_inicio=14
				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "GET",
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + `/clases/filtered${filter}`, requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							setStore({ clases: data });
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			inscribirse: async data => {
				let token = localStorage.getItem("token");

				let body = {
					clase_id: data.clase_id
				};

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "POST",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/enroll", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Inscripcion realizada exitosamente", "success");
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			removerInscripcion: async data => {
				let token = localStorage.getItem("token");

				let body = {
					clase_id: data.clase_id
				};

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "DELETE",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/enroll", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Inscripcion eliminada exitosamente", "success");
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			getCredits: async () => {
				let token = localStorage.getItem("token");
				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "GET",
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/user/credits", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							setStore({ creditos: data.creditos });
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			valorate: async data => {
				let token = localStorage.getItem("token");

				let body = {
					valoracion: data.valoracion,
					id: data.id
				};

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "POST",
						body: JSON.stringify(body),
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/valorate", requestOptions);
						let data = await response.json();
						if (data.message) {
							getActions().showMessage("Error!", data.message, "error");
						} else {
							getActions().showMessage("Exito!", "Valoracion realizada exitosamente", "success");
						}
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			},

			checkout: async () => {
				let token = localStorage.getItem("token");

				if (token) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append("Authorization", token);

					var requestOptions = {
						method: "POST",
						headers: myHeaders
					};

					try {
						let response = await fetch(process.env.BACK_URL + "/checkout", requestOptions);
						let data = await response.json();
						console.log(data);
					} catch (error) {
						getActions().showMessage("Error!", "Error en el servidor", "error");
					}
				}
			}
		}
	};
};

export default getState;
