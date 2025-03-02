function updateTime(id) {
    var currentTime = new Date();
    var timeString = currentTime.toLocaleTimeString();
  const taskContainer=  document.getElementById("added-task")
  const createElement = document.createElement('p')
  createElement.innerText = "you have completed the task :" + timeString;
  createElement.classList.add("comment")
  taskContainer.append(createElement)

//   = "you have completed the task " + timeString;
}

function clearHistory(){
    document.getElementById("added-task").textContent = ""
}