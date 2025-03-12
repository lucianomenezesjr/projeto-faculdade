// Get the all buttons elements

const buttons = document.querySelectorAll('.redesSociaisIcon');

// Loop through each button and add event listeners
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {

      button.style.width = '26px';
      button.style.height = '26px';
    });
  
    button.addEventListener('mouseout', function() {
      button.style.width = '20px';
      button.style.height = '20px';

    });
  });