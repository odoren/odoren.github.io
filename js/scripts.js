/** Writes "last modified" data to footer */
function lastModifiedFooter() {
	return document.write("last modified: " + new Date(document.lastModified).toLocaleDateString());
}

/** 
 * "Light switch" theme changer
 * Default state is "on" (root CSS var --state is equal to 1)
 * Clicking the switch changes the theme colors and state
 */
function lightSwitch() {
	var style = getComputedStyle(document.body);
	var state = style.getPropertyValue("--state");
	if (state == 1) {
		document.body.style.setProperty("--text-color", "#fff");
		document.body.style.setProperty("--link-text-color", "#000");
		document.body.style.setProperty("--background-color", "#696969");
		document.body.style.setProperty("--primary-color", "cyan");
		document.body.style.setProperty("--secondary-color", "magenta");
		document.style.setProperty("--state", 2);
	}
	else {
		document.body.style.setProperty("--text-color", "#000");
		document.body.style.setProperty("--link-text-color", "#fff");
		document.body.style.setProperty("--background-color", "#f4f4f4");
		document.body.style.setProperty("--primary-color", "blue");
		document.body.style.setProperty("--secondary-color", "red");
		document.body.style.setProperty("--state", 1);
	}
}
