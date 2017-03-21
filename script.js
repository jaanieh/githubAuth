window.addEventListener("load", function()
{
var provider = new firebase.auth.GithubAuthProvider();
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let logintext = document.getElementById("text");
let infotext = document.getElementById("infotext");

logout.style.display = "none";
//logintext.innerHTML = "";

//********** LOG IN KNAPP *****************/
login.addEventListener("click", function(event){
	
firebase.auth().signInWithPopup(provider)
.then(function(result) {
								// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
	console.log("Här är userobjektet: " + user);	
	
	logintext.innerHTML = `Du är inloggad som: ${user.email}`;
	
	/*if (user.displayName == null){
		
	
	}
	else
	{
		logintext.innerHTML = `Du är inloggad som: ${user.displayName}`
	};*/
});

login.style.display = "none";
logout.style.display = "inherit";


});

//************* LOG OUT KNAPP **************//
logout.addEventListener("click", function(event){
firebase.auth().signOut()
.then(function(result) {
	// Utloggning lyckades
	logintext.innerHTML = "Du har loggat ut";
	console.log("utloggning lyckades");
})
.catch(function(error) {
	// Utloggning misslyckades
	infotext.innerHTML = "Utloggning misslyckades";
	console.log("utloggning misslyckades");
});

login.style.display = "inherit";
logout.style.display = "none";

});


});