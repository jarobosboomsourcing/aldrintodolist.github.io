//pop up

  // Open the popup and show the overlay
  function openPopup() {
  
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
  }
  
  // Close the popup and hide the overlay
  function closePopup() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

  }
  
  //opens the popup of creating a new Todo
  
  function openPopupAddTodo(){
    openPopup();
  
    let popup = document.getElementById('todoForm');
    popup.style.display = 'flex';
  }
  
  function closePopupAddTodo(){
    closePopup();

    let textBox = document.getElementById('inputTodo');
    textBox.value = '';

    let popup = document.getElementById('todoForm');
    popup.style.display = 'none';

    return;
  }

  //opens the popup of editing the Todo

  function openPopupEdit(){
    openPopup();
    
    let popup = document.getElementById('editPopup');
    popup.style.display = 'flex';
  }
  
  function closePopupEdit(){
    closePopup();
  
    let popup = document.getElementById('editPopup');
    popup.style.display = 'none';
  
  }
  