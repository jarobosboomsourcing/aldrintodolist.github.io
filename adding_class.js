// Adding class

class addingTask{

    static counter = 0;

     addTodo() {
      // event.preventDefault();
      let todoTask = document.getElementById('inputTodo').value;
      if(!todoTask){
        return;
      }
   
       let divElement = document.getElementById("taskArea");
       let taskDiv = document.createElement("div");
       taskDiv.id = this.idGen().toString();
       taskDiv.className = "task";
   
       let taskPara = document.createElement("p");
       
       taskPara.textContent = todoTask;
       taskPara.className = "taskP";
   
       let editIcon = document.createElement('i');
       editIcon.classList.add('editIcon');
       editIcon.classList.add('fa', 'fa-edit');
      
   
       let checkbox = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.classList.add("taskCheckBox");
    //   checkbox.id = "taskCheckBox";
     //  checkbox.onclick = addingTask.enableDelBtn;
   
       divElement.appendChild(taskDiv);
   
       taskDiv.appendChild(taskPara);
       taskDiv.appendChild(editIcon);
       taskDiv.appendChild(checkbox);
   
       
        // Reset the input field value
       document.getElementById('overlay').style.display = "none";
   
       let textBox = document.getElementById('inputTodo');
   
      textBox.value = '';
     }
   
      idGen(){
        addingTask.counter++;
        return addingTask.counter;
     }
}


