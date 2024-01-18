

function toggleDropdown() {
    
    var slideMenu = document.getElementById("slide-menu");
    

    // Toggle the menu when clicking the button
   
    slideMenu.style.maxHeight = (slideMenu.style.maxHeight === "100%") ? "0" : "100%";
    slideMenu.style.opacity = (slideMenu.style.opacity === "100%") ? "0%" : "100%";
    slideMenu.style.transform = (slideMenu.style.transform === "translateY(-10px)") ? "translateY(0px)" : "translateY(-10px)"; 
    console.log ("hello world");
  
  }
/*
document.getElementById("slide-menu").classList.toggle("show");*/
