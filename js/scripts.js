/** "Tracking" flag for Analytics.js methods */
const tracking = false

window.onload=function() {
	/** Load "last modified" footer */
	insertLastModifiedFooter();

	if (tracking == true) {
		/** Home page() call */
		analytics.page("Home");

		/** Load contact link tracking */
		const queryResult = document.getElementsByClassName("contact-link");
		Array.from(queryResult).forEach(function(element) {
			element.addEventListener("click", function() {
				analytics.track("Contact Clicked", { contactType: element.id })
			})
		});	

		/** Load light switch tracking */
		const lightSwitch = document.getElementById("light-switch");
		lightSwitch.addEventListener("click", switchLight);
		lightSwitch.addEventListener("click", function() {
			analytics.track("Light Switched");
		});
	}
}

/** 
 * "Light switch" theme changer
 * Default state is "on" (root CSS var --state is equal to 0)
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