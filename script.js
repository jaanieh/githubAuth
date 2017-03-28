window.addEventListener("load", function()
{
var provider = new firebase.auth.GithubAuthProvider();
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let logintext = document.getElementById("text");
let infotext = document.getElementById("infotext");
let vipButton = document.getElementById("vip");
let userEmail;


logout.style.display = "none";
vipButton.disabled = true;



//********** LOG IN KNAPP *****************/
login.addEventListener("click", function(event){
	
firebase.auth().signInWithPopup(provider)
.then(function(result) {
								// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
	userEmail = user.email;
	console.log("Här är userobjektet: " + user);	
	console.log("Här är mailen: " + userEmail);
	console.log("namn: " + user.displayName);
	
	if (user.displayName == null){
		
		logintext.innerHTML = `Du är inloggad som: ${user.email}`;
	
	}
	else
	{
		logintext.innerHTML = `Du är inloggad som: ${user.displayName}`;
	}	
	
	if (userEmail == "janie.mobacker@live.se"){
	
		vipButton.disabled = false;
		console.log("det fungerade" + userEmail);
		
		}
		else {
			vipButton.disabled = true;
			console.log("Det fungerade inte!!")
		}
	
});

//vipButton.style.display = "inherit";
login.style.display = "none";
logout.style.display = "inherit";


});

console.log("Useremail utanför : " + userEmail);


		
	vipButton.addEventListener("click", function(event){
	
		window.alert("Hej Janie!!");
		
		});
	

//************* LOG OUT KNAPP **************//
logout.addEventListener("click", function(event){
	
	userEmail = null;
	vipButton.disabled = true;
	
firebase.auth().signOut()
.then(function(result) {
	// Utloggning lyckades
	logintext.innerHTML = "Du har loggat ut";
	console.log("utloggning lyckades");
	console.log("Useremail logoutbutton: " + userEmail);
	
	
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