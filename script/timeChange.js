const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
document.getElementById("current-date").textContent = formattedDate;