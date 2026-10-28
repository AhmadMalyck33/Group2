
const fs = require("node:fs");
const path = require("node:path");

const sourceDirectory = path.join(__dirname, "../src");
const outputDirectory = path.join(__dirname, "../dist");

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

const filesToCopy = ["index.html", "style.css", "app.js"];

for (const file of filesToCopy) {
  fs.copyFileSync(
    path.join(sourceDirectory, file),
    path.join(outputDirectory, file)
  );
}

console.log("Build completed successfully.");
