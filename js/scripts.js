window.onload=function() {
	/** Load "last modified" footer */
	insertLastModifiedFooter();

	/** 
	 * Load contact link tracking 
	 * Use bind() method to avoid immediate execution of track() call
	 */
	const queryResult = document.getElementsByClassName("contact-link");
	Array.from(queryResult).forEach(function(element) {
		element.addEventListener("click", analytics.track.bind(this, "Contact Clicked", {
			contactType: element.id
		}))
	});

	/** 
	 * Load light switch tracking 
	 * Use bind() method to avoid immediate execution of track() call
	 */
	const lightSwitch = document.getElementById("light-switch");
	lightSwitch.addEventListener("click", switchLight);
	lightSwitch.addEventListener("click", analytics.track.bind(this, "Light Switched"));
}

/** 
 * "Light switch" theme changer
 * Default state is "on" (root CSS var --state is equal to 1)
 * Clicking the switch changes the theme colors and state
 */
function switchLight() {
	let state = getComputedStyle(document.body).getPropertyValue("--state");
	if (state == 0) {
		document.body.style.setProperty("--text-color", "#fff");
		document.body.style.setProperty("--link-text-color", "#000");
		document.body.style.setProperty("--background-color", "#696969");
		document.body.style.setProperty("--primary-color", "cyan");
		document.body.style.setProperty("--secondary-color", "magenta");
		document.body.style.setProperty("--state", 1);
	}
	else {
		document.body.style.setProperty("--text-color", "#000");
		document.body.style.setProperty("--link-text-color", "#fff");
		document.body.style.setProperty("--background-color", "#f4f4f4");
		document.body.style.setProperty("--primary-color", "blue");
		document.body.style.setProperty("--secondary-color", "red");
		document.body.style.setProperty("--state", 0);
	}
}

/** Writes "last modified" data to footer */
function insertLastModifiedFooter() {
	const footer = document.getElementById("last-modified-footer");
	const lastModifiedFooter = document.createElement("p");
	const text = document.createTextNode("last modified: " + new Date(document.lastModified).toLocaleDateString());
	lastModifiedFooter.append(text);
	footer.append(lastModifiedFooter);
}