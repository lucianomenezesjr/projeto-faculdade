// Get the all buttons elements
const buttons = document.querySelectorAll('.icone_redes_sociais');

// Loop through each button and add event listeners
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      button.style.width = '60vh';
      button.style.height = '9.6vh';
    });
  
    button.addEventListener('mouseout', function() {
      button.style.width = '50vh';
      button.style.height = '8vh';
    });
  });