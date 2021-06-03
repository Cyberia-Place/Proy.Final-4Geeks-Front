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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getProfile: async () => {
				let token =
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoxLCJlbWFpbCI6ImFndUBnbWFpbC5jb20iLCJub21icmUiOiJBZ3VzdGluIiwiYXBlbGxpZG8iOiJQZXJhemEifSwiaWF0IjoxNjIyNzIxNDIwLCJleHAiOjE2MjI4MDc4MjB9.VwyRmtMdWxoaXJ1SqC0p-oXFAc8p-p4nlKP4snWOxpM";

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
	};
};

export default getState;
