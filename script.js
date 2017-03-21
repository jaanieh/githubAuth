window.addEventListener("load", function()
{
var provider = new firebase.auth.GithubAuthProvider();


firebase.auth().signInWithPopup(provider)
.then(function(result) {
								// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
});

});