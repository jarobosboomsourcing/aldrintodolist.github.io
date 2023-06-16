// changing theme feature



document.addEventListener('DOMContentLoaded', function() {
  const theme1 = document.getElementById('theme1');
  const theme2 = document.getElementById('theme2');
  const theme3 = document.getElementById('theme3');

  const titleDiv = document.querySelector('.title');
  const taskArea = document.getElementById('taskArea');
  const btnArea = document.getElementById('btnArea');
  const todoBtnArea = document.querySelector('.todoBtnArea');
  const editBtnArea = document.querySelector('.editBtnArea');
  
  let body = document.body;
  let delay = 500; // Delay in milliseconds

  //default colors and pictures
  let defaultBackgroundImage = "url('images/default_background.jpg')";
  let defaultTaskAreaImage = "url('images/defaultTaskImage.jpg')" ;
  let defaultTitleColor = "#c7370e";
  let defaultBtnAreaColor = '#bb4424';

  // defaultBackgroundImage,defaultTaskAreaImage,defaultTitleColor,defaultBtnAreaColor
// hovering

// THEME 1

  theme1.addEventListener('mouseover', function(){
    body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
    
    let theme1_backgroundImage = "url('images/theme1_background_image.jpg')";
    let theme1_taskAreaBackgroundImage = "url('images/theme1_task_area_image.jpg')";
    let theme1_titleAreaBackgroundColor = "#0D1E40";
    let theme1_btnAreaBackgroundColor = '#6077A6';


    setTimeout(function() {
      body.style.backgroundImage = theme1_backgroundImage;
      taskArea.style.backgroundImage = theme1_taskAreaBackgroundImage;
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = theme1_titleAreaBackgroundColor;
      btnArea.style.backgroundColor = theme1_btnAreaBackgroundColor;
      todoBtnArea.style.backgroundColor = theme1_btnAreaBackgroundColor;
      editBtnArea.style.backgroundColor = theme1_btnAreaBackgroundColor;

    }, delay);

    // theme1 click

    this.addEventListener('click', function(event){
      defaultBackgroundImage = theme1_backgroundImage;
      defaultTaskAreaImage = theme1_taskAreaBackgroundImage;
      defaultTitleColor = theme1_titleAreaBackgroundColor;
      defaultBtnAreaColor = theme1_btnAreaBackgroundColor;

        set_theme(defaultBackgroundImage, defaultTaskAreaImage, defaultTitleColor, defaultBtnAreaColor);
    });
  });

  theme1.addEventListener('mouseout', function(){
    default_design(defaultBackgroundImage,defaultTaskAreaImage,defaultTitleColor,defaultBtnAreaColor);
  });

  // THEME 2

  theme2.addEventListener('mouseover', function(){
    body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
   
    let theme2_backgroundImage = "url('images/theme2_background_image.jpg')";
    let theme2_taskAreaBackgroundImage = "url('images/theme2_task_area_image.jpg')";
    let theme2_titleAreaBackgroundColor = "#D96666";
    let theme2_btnAreaBackgroundColor = '#F29999';

    // theme1 click

    setTimeout(function() {
      body.style.backgroundImage = theme2_backgroundImage;
      taskArea.style.backgroundImage = theme2_taskAreaBackgroundImage;
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = theme2_titleAreaBackgroundColor;
      btnArea.style.backgroundColor = theme2_btnAreaBackgroundColor;
      todoBtnArea.style.backgroundColor = theme2_btnAreaBackgroundColor;
      editBtnArea.style.backgroundColor = theme2_btnAreaBackgroundColor;

    }, delay);

    this.addEventListener('click', function(event){
      defaultBackgroundImage = theme2_backgroundImage;
      defaultTaskAreaImage = theme2_taskAreaBackgroundImage;
      defaultTitleColor = theme2_titleAreaBackgroundColor;
      defaultBtnAreaColor = theme2_btnAreaBackgroundColor;

      set_theme(defaultBackgroundImage, defaultTaskAreaImage, defaultTitleColor, defaultBtnAreaColor);

    });
  });

  theme2.addEventListener('mouseout', function(){
    default_design(defaultBackgroundImage,defaultTaskAreaImage,defaultTitleColor,defaultBtnAreaColor);
  });

  // THEME 3 or THE DEFAULT THEME

  theme3.addEventListener('mouseover', function(){
    body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
   
    let defaultBackgroundImage = "url('images/default_background.jpg')";
    let defaultTaskAreaImage = "url('images/defaultTaskImage.jpg')" ;
    let defaultTitleColor = "#c7370e";
    let defaultBtnAreaColor = '#bb4424';

    setTimeout(function() {
      body.style.backgroundImage = defaultBackgroundImage;
      taskArea.style.backgroundImage = defaultTaskAreaImage;
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = defaultTitleColor;
      btnArea.style.backgroundColor = defaultBtnAreaColor;

    }, delay);

    this.addEventListener('click', function(event){
      set_theme(defaultBackgroundImage, defaultTaskAreaImage, defaultTitleColor, defaultBtnAreaColor);

    });
  });

  theme3.addEventListener('mouseout', function(){
    default_design(defaultBackgroundImage,defaultTaskAreaImage,defaultTitleColor,defaultBtnAreaColor);
  });


});

function default_design(defaultBackgroundImage,defaultTaskAreaImage,defaultTitleColor,defaultBtnAreaColor){
  body.style.opacity = 0; // Start with 0 opacity
    body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity
    setTimeout(function() {
      body.style.backgroundImage = defaultBackgroundImage;
      taskArea.style.backgroundImage = defaultTaskAreaImage;
      body.style.opacity = 1; // Fade in by setting opacity to 1
      titleDiv.style.backgroundColor = defaultTitleColor;
      btnArea.style.backgroundColor = defaultBtnAreaColor;
    }, delay);
}

function set_theme(defaultBackgroundImage, defaultTaskAreaImage, defaultTitleColor, defaultBtnAreaColor){
  body.style.opacity = 0; // Start with 0 opacity
  body.style.transition = "opacity 1s ease-in-out"; // Transition for opacity

  body.style.backgroundImage = defaultBackgroundImage;
  taskArea.style.backgroundImage = defaultTaskAreaImage;
  body.style.opacity = 1; // Fade in by setting opacity to 1
  titleDiv.style.backgroundColor = defaultTitleColor;
  btnArea.style.backgroundColor = defaultBtnAreaColor;
  todoBtnArea.style.backgroundColor = defaultBtnAreaColor;
  editBtnArea.style.backgroundColor = defaultBtnAreaColor;
}
