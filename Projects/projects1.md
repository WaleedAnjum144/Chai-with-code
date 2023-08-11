// Targeting element  

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// creating loop on the button  

buttons.forEach(function (button) {

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

});