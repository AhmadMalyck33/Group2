
function getApplicationStatus() {
  return "Application is working correctly.";
}

if (typeof document !== "undefined") {
  const statusButton = document.getElementById("statusButton");
  const statusText = document.getElementById("status");

  if (statusButton && statusText) {
    statusButton.addEventListener("click", function () {
      statusText.textContent = getApplicationStatus();
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = { getApplicationStatus };
}
