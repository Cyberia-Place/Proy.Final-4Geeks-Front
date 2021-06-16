import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import { Home } from "./views/home";
import { Compra } from "./views/compra";
import { InicioAlumno } from "./views/index_alumno";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { NavbarSesion } from "./component/navbar_sesion";
import { useContext } from "react";
import { Footer } from "./component/footer";
import { Profile } from "./views/Profile";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { IndexProfesor } from "./views/index_profesor";
import { Ajustes_del_perfil } from "./views/Ajustes_del_perfil";
import { CambioPassword } from "./component/cambio-password";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#59a80f"
		},
		secondary: {
			main: "#252525"
		},
		error: {
			main: "#fdd835"
		}
	}
});

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<ThemeProvider theme={theme}>
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						{store.usuario ? <NavbarSesion /> : <Navbar />}
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/inicio/alumno">
								<InicioAlumno />
							</Route>
							<Route exact path="/inicio/compra">
								<Compra />
							</Route>
							<Route exact path="/inicio/profesor">
								<IndexProfesor />
							</Route>
							<Route exact path="/profile">
								<Profile />
							</Route>
							<Route exact path="/ajustes/perfil">
								<Ajustes_del_perfil />
							</Route>
							<Route exact path="/cambio-password">
								<CambioPassword />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default injectContext(Layout);
