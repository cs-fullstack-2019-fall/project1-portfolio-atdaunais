let entering = document.getElementById("enter_text");
let counter = 0;

function loading_dots(){
    entering.innerText = entering.innerText + ".";
    counter++;
    if (counter === 4){
        counter = 0;
        entering.innerText = "Now Entering"
    }
}

function time_set(){
    counter = 0;
    let set_interval = window.setInterval(loading_dots, 500)
}

time_set();