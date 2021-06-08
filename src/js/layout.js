import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { InicioAlumno } from "./views/index_alumno";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { IndexProfesor } from "./views/index_profesor";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#59a80f"
		},
		secondary: {
			main: "#aef060"
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

	return (
		<ThemeProvider theme={theme}>
			<div className="d-flex flex-column">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/demo">
								<Demo />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route exact path="/inicio/alumno">
								<InicioAlumno />
							</Route>
							<Route exact path="/inicio/profesor">
								<IndexProfesor />
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
