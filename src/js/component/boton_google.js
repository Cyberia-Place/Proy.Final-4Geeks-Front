import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
	console.log(response);
	console.log(response.profileObj);
};

export const BotonGoogle = () => {
	return (
		<GoogleLogin
			clientId="893541568420-e0vjluam1bjufdp1k1eglhh787vp7e60.apps.googleusercontent.com"
			buttonText="Iniciar Sesión"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={"single_host_origin"}
		/>
	);
};
