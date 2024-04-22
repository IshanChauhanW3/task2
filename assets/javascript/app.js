var stat=-1

// Function to add class to element
function addClassToElement(elementId, className) {
    var element = document.getElementById(elementId);
    console.log(stat)
    if (element && stat==-1) {
       element.classList.add(className);
        
        stat=1
        console.log(stat)
    }
    else if(element && stat==1){
        element.classList.remove(className);
        stat= -1;
        console.log(stat)        
    }
     else {
      console.error("Element with ID '" + elementId + "' not found.");
      return 
    }
  }
  
  // Add event listener to the anchor tag
  
  var addClass = document.getElementById('dropdown-menubar');
  if (addClass) {
    addClass.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    addClassToElement('menubar', 'show');
    console.log("stat"+stat)
    });
  } else {
    console.error("Anchor tag with ID 'addClassLink' not found.");
  }

  var addClass = document.getElementById('login-logout');
  if (addClass) {
    addClass.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    addClassToElement('navbar-dropdown', 'navbar-dropdown');
    console.log("stat"+stat)
    });
  } else {
    console.error("Anchor tag with ID 'addClassLink' not found.");
  }

  var addClass = document.getElementById('nav-dropdown');
  if (addClass) {
    addClass.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    addClassToElement('navbaroptions-mobile', 'navbaroptions-mobile');
    console.log("stat"+stat)
    });
  } else {
    console.error("Anchor tag with ID 'addClassLink' not found.");
  }
