// Targeting element  

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// creating loop on the button  

<!-- buttons.forEach(function (button) {

    button.addEventListener('click', function(e){
   
    if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'orange'){
        body.style.backgroundColor = 'orange'
    }


    })

}); -->



// Another method  *******************************

// buttons.forEach(function (button){

//     button.addEventListener('click', function(e){
//         const bgColor = e.target.getAttribute('data-bg-color');
//         if(bgColor){
//             body.style.backgroundColor= bgColor;
//         }
//     });

// });


// 3rd Method   *********************************************

// maping objects  

const colorMap ={
    purple : "purple",
    green : "green",
    red : "red",
    yellow : "yellow",
    orange : "orange",

}


buttons.forEach(function (button){

    button.addEventListener('click' , function(e){
        const buttonId = e.target.classList[2];
        const bgColor = colorMap[buttonId];

        if(bgColor){
            body.style.backgroundColor = bgColor;
        }

    });


    <!-- 4th Method   -->

const body = document.querySelector("body");

function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}

  // 5th Method  ****************
const buttonConatiner = document.getElementById("box");
const body = document.querySelector("body");

buttonConatiner.addEventListener('click' , function(e) {
    if (e.target.classList.contains('button')){
        const color = e.target.classList[1];
        if (color){
            body.style.backgroundColor = color;
        }
    }
});