function displayTime() {
  let displayElement = document.getElementById("displayTime");

  setInterval(function() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Set 0 to 12 for midnight

    let formattedTime = hours + ":" + padZero(minutes) + " " + amOrPm;

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


document.addEventListener('DOMContentLoaded', function() {
  let theme1 = document.getElementById('theme1');
  let theme2 = document.getElementById('theme2');

  let titleDiv = document.querySelector('.title');
  let taskArea = document.getElementById('taskArea');
  let btnArea = document.getElementById('btnArea');
  
  let body = document.body;
  let delay = 500; // Delay in milliseconds

  //default colors
  const defaultTitleColor = "#c7370e";
  const defaultBtnAreaColor = '#bb4424';
  const defaultTaskAreaImage = "url('images/defaultTaskImage.jpg')" 

  theme1.addEventListener('mouseover', function(){
    body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
   
    setTimeout(function() {
      body.style.backgroundImage = "url('images/theme1_background_image.jpg')";
      taskArea.style.backgroundImage = "url('images/theme1_task_area_image.jpg')";
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = "#0D1E40";
      btnArea.style.backgroundColor = '#6077A6';

    }, delay);
  });

  theme1.addEventListener('mouseout', function(){
    default_design();
  });

  theme2.addEventListener('mouseover', function(){
    body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
   
    setTimeout(function() {
      body.style.backgroundImage = "url('images/theme2_background_image.jpg')";
      taskArea.style.backgroundImage = "url('images/theme2_task_area_image.jpg')";
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = "#D96666";
      btnArea.style.backgroundColor = '#F29999';

    }, delay);
  });

  theme2.addEventListener('mouseout', function(){
    default_design();
  });



  function default_design(){
    body.style.opacity = 0; // Start with 0 opacity
      body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
      setTimeout(function() {
        body.style.backgroundImage = "url('images/default_background.jpg')";
        taskArea.style.backgroundImage = defaultTaskAreaImage;
        body.style.opacity = 1; // Fade in by setting opacity to 1
        titleDiv.style.backgroundColor = defaultTitleColor;
        btnArea.style.backgroundColor = defaultBtnAreaColor;
      }, delay);
  }

});


