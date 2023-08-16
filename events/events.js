// document.getElementById('owl').onclick = function(){
//     alert ('owl Clicked')
// }

//ATTCHEVENT ()

//JQUERY - ON 

// type , timestamp , defaultPrevent,
//target , toElement , srcElement , currentTarget,
//clientX , ClientY, ScreenX , SCREENY,
//altKey, ctrlKey,shiftKey, KeyCode

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the url")
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl");
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click' , function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google Clicked')
// }, false)


document.querySelector("#images"),addEventListener('click' , function(e){
    console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode;


    console.log(e.target.tagName);
    console.log(e.target.id);
    if (e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // removeIt.remove()


    // removeIt.parentNode.removeChild(removeIt)
})