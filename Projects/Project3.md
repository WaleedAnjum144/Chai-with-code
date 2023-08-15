const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock')


setInterval(function(){


    let date = new Date("August 15, 2023 2:13:00");
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000);