/* Moralis init code */

const serverUrl = "https://vrcbvnmimfvr.usemoralis.com:2053/server";
const appId = "565KPZpHCNMtnzT0JBTleULYclemab6ZxPGVfdqm";

Moralis.start({ serverUrl, appId });

// Authentication code
async function login() {
	//magic moralis code, asks users to sign in via metamask if installed on browser
	let user = Moralis.User.Current();

	if(!user ){
		user = await Moralis.authenticate({ signingMessage: "Log in"})
		.then (function (user) {
			console.log("loggen in user:", user);
			console.log(user.get("ethAddress"));
		})
		.catch(function (error) {
			console(error);
		});
	}
}