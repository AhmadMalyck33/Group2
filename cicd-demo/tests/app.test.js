
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const srcPath = path.join(__dirname, "../src");
const html = fs.readFileSync(
  path.join(srcPath, "index.html"),
  "utf8"
);
const css = fs.readFileSync(
  path.join(srcPath, "style.css"),
  "utf8"
);

const { getApplicationStatus } = require("../src/app.js");

test("HTML contains the student profile", () => {
  assert.ok(html.includes("Student Profile"));
  assert.ok(html.includes("BS Information Technology"));
  assert.ok(html.includes("Cybersecurity"));
});

test("CSS file contains webpage styling", () => {
  assert.ok(css.includes("font-family"));
  assert.ok(css.includes("background"));
});

test("Application status function returns the expected message", () => {
  assert.equal(
    getApplicationStatus(),
    "Application is working broken."
  );
});
