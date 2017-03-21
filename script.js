window.addEventListener("load", function()
{
var provider = new firebase.auth.GithubAuthProvider();
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let logintext = document.getElementById("text");
let infotext = document.getElementById("infotext");
let vipButton = document.getElementById("vip");


logout.style.display = "none";
//logintext.innerHTML = "";



vipButton.addEventListener("click", function(event){
	
	window.alert("Hej Janie!!");
});

//********** LOG IN KNAPP *****************/
login.addEventListener("click", function(event){
	
firebase.auth().signInWithPopup(provider)
.then(function(result) {
								// Om autentisering lyckas, så finns användarinfo i user
	let user; = result.user;
	console.log("Här är userobjektet: " + user);	
	
	
	if (user.displayName == null){
		
		logintext.innerHTML = `Du är inloggad som: ${user.email}`;
	
	}
	else
	{
		logintext.innerHTML = `Du är inloggad som: ${user.displayName} (${user.email}`
	}
	
		if (user.email == "janie.mobacker@live.se"){
		vipButton.disabled = false;
		}
		else {
			vipButton.disabled = true;
		}
	
	
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