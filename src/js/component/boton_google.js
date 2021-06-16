import React from "react";
import GoogleLogin from "react-google-login";
import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import GoogleButton from "./boton_google/diseño_boton_google";
// import GoogleButton from "react-google-button";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#FFFFFF"
		}
	}
});

const responseGoogle = response => {
	console.log(response);
	console.log(response.profileObj);
};

export const BotonGoogle = () => {
	return (
		<ThemeProvider theme={theme}>
			<GoogleLogin
				clientId="893541568420-jkdmsfhuacmuj67r6k4t6sefj8qukmt8.apps.googleusercontent.com"
				// buttonText="Iniciar Sesión"
				render={renderProps => (
					<GoogleButton
						type="light" // can be light or dark
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						label="Iniciar sesión con Google"
					/>
				)}
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={"single_host_origin"}
				isSignedIn={true}
			/>
		</ThemeProvider>
	);
};
