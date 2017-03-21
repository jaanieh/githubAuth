window.addEventListener("load", function()
{
var provider = new firebase.auth.GithubAuthProvider();
let login = documemt.getElementById("login");
let logout = document.getElementById("logout");
let logintext = document.getElementsByClassName("text");
let infotext = document.getElementsByClassName("infotext");

logout.style.display = "none";
logintext.innerHTML = "";

//********** LOG IN KNAPP *****************/
login.addEventListener("click", function(event){
	
firebase.auth().signInWithPopup(provider)
.then(function(result) {
								// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
});

login.style.display = "none";
logout.style.display = "inherit";
logintext.innerHTML = `Du är inloggad som: ${user.displayName}`;

});

//************* LOG OUT KNAPP **************//
logout.addEventListener("click", function(event){
firebase.auth().signOut()
.then(function(result) {
	// Utloggning lyckades
})
.catch(function(error) {
	// Utloggning misslyckades
	infotext.innerHTML = "Utloggning misslyckades";
});

});


});