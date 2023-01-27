import { writeFile, existsSync, mkdirSync } from "fs";
import { createFullTemplate } from "./templates/fullTemplate";
import { Themes } from "./colors";

function createJson() {
	const output = createFullTemplate(Themes.AllBlue);
	const outputDir = "./themes";

	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}

	writeFile(outputDir + "/test-color-theme.json", output, (err) => {
		if (!err) {
			console.log("Successfully wrote JSON to file.");
		} else {
			console.log(err);
		}
	});
}

createJson();