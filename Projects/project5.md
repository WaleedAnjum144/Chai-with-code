// generate a random color

const randomColor = function() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};


//  intervalId is a global scop variable  
let intervalId;

// fOR START CHANGINH COLOR 

function startChaningColor() {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  
  function changeBgColor (){
    document.body.style.backgroundColor = randomColor();
  }
}

// creating function for stopColor 
function stopChaningColor() {
  clearInterval(intervalId);
  intervalId = null;
}

// Targeting button  

document.querySelector("#start").addEventListener("click", startChaningColor);

document.querySelector("#stop").addEventListener("click", stopChaningColor);
