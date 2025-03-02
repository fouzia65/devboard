let number = 6;
function changeNumber(){
  if(number>0){
    alert('Board update successfuly')
    number--
    document.getElementById('task-dec').innerText = number;
    if(number == 0){
      alert("congrates!! you have completed all the current task")
    }
  }
  
}
let num=23;
function inrease(){
  if(num > 22){
    num++;
    document.getElementById("increase").innerText = num;
  }
}

function disableButton(id) {
  document.getElementById(id).disabled = true;
  document.getElementById(id).style.backgroundColor = "gray";
}