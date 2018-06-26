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
		style.setProperty("--text-color", "#fff");
		style.setProperty("--link-text-color", "#000");
		style.setProperty("--background-color", "#696969");
		style.setProperty("--primary-color", "cyan");
		style.setProperty("--secondary-color", "magenta");
		style.setProperty("--state", 2);
	}
	else {
		style.setProperty("--text-color", "#000");
		style.setProperty("--link-text-color", "#fff");
		style.setProperty("--background-color", "#f4f4f4");
		style.setProperty("--primary-color", "blue");
		style.setProperty("--secondary-color", "red");
		style.setProperty("--state", 1);
	}
}
