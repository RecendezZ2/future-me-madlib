const form = document.getElementById("yourStory");


const story = document.querySelector("#story");
console.log(form);
// creates a onFormSubmit function that is refreshed when the event is triggered
function onFormSubmit(event) {
	
	event.preventDefault();

	
	const data = new FormData(event.target);
	
    const dataObject = Object.fromEntries(data.entries()); 

document.getElementById("story").style.color = "#ff0000"
story.textContent = `It's the year 30${dataObject.number}. You have been working on a top-secret program that will change the world. Three men in black suits walk in and tell you to come with them. Naturally, you get out of your seat and ${dataObject.verb} in the opposite direction through a futuristic city filled with flying cars, robot assistants, and glowing buildings.

Currently, you are the creator of a life-changing app that ${dataObject.problem}, but there is a ${dataObject.bug} bug that only you can fix. You look back and see that the men in suits are holding computers in their hands and yelling about a ${dataObject.error}. You decide to turn around and fix the problem. Afterward, they offer you a job at ${dataObject.dream}.

You are the only person who has learned ${dataObject.language}, and they need your help designing a ${dataObject.favoriteColor}-themed system for their company. You talk things over during coffee, and they agree to pay you ${dataObject.number} times the normal pay rate.

Because you have one-of-a-kind skills, you respond, "Eh, im working on a app that will fix ${dataObject.sideProject} i dont need your money, hmm why not but only if you pay me ${dataObject.two}x the normal pay rate." They agree. You get into your flying car and drive yourself to your cowarkers house and finnnish your app that  ${dataObject.sideProject} this app is a game changer..Finally your home, you pat yourself on the back and think, "you wished you stopped by 711 for some of their chicken wings." the end!!!!`

    
    
	

	console.log(dataObject);

	form.reset();
}

form.addEventListener("submit", onFormSubmit);
