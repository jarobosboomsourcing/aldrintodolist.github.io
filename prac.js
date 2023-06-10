function displayTime() {
    let displayElement = document.getElementById("displayTime");

    setInterval(function() {
      let currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();
      let formattedTime = hours + ":" + padZero(minutes) + ":" + padZero(seconds);

      displayElement.innerHTML = formattedTime;
    }, 1000);
  }

  function padZero(value) {
    return value.toString().padStart(2, "0");
  }

function displayDate(){
    let displayElement = document.getElementById('displayDate');
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month:'long', day:'numeric'});

    displayElement.innerHTML = formattedDate;
}

function onload(){
    displayTime();
    displayDate();
}



//onclick events

let paraHolder;
let parentDivIdHolder;

 

document.addEventListener('click', function(event) {
  // add the created todo
  if (event.target.classList.contains('todoBtn')) {
    new addingTask().addTodo();
  }

  // create a new Todo
  if(event.target.id.includes('addTodoBtn')){
    event.stopPropagation();
    openPopupAddTodo();
  }

});

 // the Edit Icon
 document.addEventListener('click', function(event){
  if(event.target.classList.contains('editIcon')){
    let selectDiv = event.target.parentNode;
    let parentDivId = selectDiv.parentNode.id;
    let taskPara = selectDiv.querySelector('p');
    let todoItem = taskPara.textContent;

    let holder = document.getElementById('inputEditTodo');
    holder.value = todoItem;

    paraHolder = taskPara;
    parentDivIdHolder = parentDivId;

    openPopupEdit();
  }
});

// the update button
document.addEventListener('click',  function(event){
  if(event.target.classList.contains('editTodoBtn')){
    let taskPara = paraHolder;

    updateTask(taskPara);
  }
});

document.addEventListener('change', function(event) {
  if (event.target.classList.contains('taskCheckBox')) {
    activateDelBtn();

    currentParentDiv.push(event.target.parentNode.id);
  }
});

function updateTask(paraHolder){
  
  //console.log('asdfasfasfas');
  let todoTask = document.getElementById('inputEditTodo').value;
  paraHolder.textContent = todoTask;
  
  document.getElementById('overlay').style.display = "none";

  let textBox = document.getElementById('inputEditTodo');
   
  textBox.value = '';

  closePopupEdit();

}

//activating the DelBtn

function activateDelBtn(){
  let delBtn = document.getElementById('deleteBtn');
  delBtn.disabled = !event.target.checked;
}

// delete button

let currentParentDiv = [];

function deleteTask() {
  for(let i = 0; i < currentParentDiv.length; i++ ){
    let toDelDiv = document.getElementById(currentParentDiv[i]);
    if (toDelDiv) {

      toDelDiv.remove();
    }
  }

  let delBtn = document.getElementById('deleteBtn');
delBtn.disabled = true;
}
