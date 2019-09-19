let resume_btn = document.getElementById("download_res");
let reflect_btns = document.getElementsByClassName("reflect_btn");
let reflect_content = document.getElementsByClassName("reflect_content");



// console.log(!(reflect_content[0].getAttribute("hidden") === true));
// reflect_btns[0].addEventListener("checked",function () {
//     if (!(reflect_content[0].getAttribute("hidden") === true)){
//         reflect_content[0].removeAttribute("hidden");
//     }
//     else{
//         reflect_content[0].setAttribute("hidden","")
//     }
// });

// if (reflect_btns[0].getAttribute("checked") === ""){
//     reflect_content[0].removeAttribute("hidden")
// }
// else if (reflect_btns[0].getAttribute("checked")===null){
//     reflect_content[0].setAttribute("hidden","")
// }

// for (let i = 0; i < reflect_btns.length; i++) {
//     reflect_btns[i].addEventListener("click", display_text(i));
// }
//
// function display_text(idx) {
//     if (reflect_content[idx].removeAttribute("hidden")
// }


reflect_btns[0].addEventListener("click", function () {
   reflect_content[0].removeAttribute("hidden");
   reflect_content[1].setAttribute("hidden","");
   reflect_content[2].setAttribute("hidden","");
   reflect_content[3].setAttribute("hidden","");
   reflect_content[4].setAttribute("hidden","");
   reflect_content[5].setAttribute("hidden","");

});

reflect_btns[1].addEventListener("click", function () {
   reflect_content[1].removeAttribute("hidden");
   reflect_content[0].setAttribute("hidden","");
   reflect_content[2].setAttribute("hidden","");
   reflect_content[3].setAttribute("hidden","");
   reflect_content[4].setAttribute("hidden","");
   reflect_content[5].setAttribute("hidden","");

});

reflect_btns[2].addEventListener("click", function () {
   reflect_content[2].removeAttribute("hidden");
   reflect_content[1].setAttribute("hidden","");
   reflect_content[0].setAttribute("hidden","");
   reflect_content[3].setAttribute("hidden","");
   reflect_content[4].setAttribute("hidden","");
   reflect_content[5].setAttribute("hidden","");

});

reflect_btns[3].addEventListener("click", function () {
   reflect_content[3].removeAttribute("hidden");
   reflect_content[1].setAttribute("hidden","");
   reflect_content[2].setAttribute("hidden","");
   reflect_content[0].setAttribute("hidden","");
   reflect_content[4].setAttribute("hidden","");
   reflect_content[5].setAttribute("hidden","");

});

reflect_btns[4].addEventListener("click", function () {
   reflect_content[4].removeAttribute("hidden");
   reflect_content[1].setAttribute("hidden","");
   reflect_content[2].setAttribute("hidden","");
   reflect_content[3].setAttribute("hidden","");
   reflect_content[0].setAttribute("hidden","");
   reflect_content[5].setAttribute("hidden","");

});

reflect_btns[5].addEventListener("click", function () {
   reflect_content[5].removeAttribute("hidden");
   reflect_content[1].setAttribute("hidden","");
   reflect_content[2].setAttribute("hidden","");
   reflect_content[3].setAttribute("hidden","");
   reflect_content[4].setAttribute("hidden","");
   reflect_content[0].setAttribute("hidden","");

});






// let accordion = document.getElementsByClassName("accordion");


// let all_links = document.getElementsByTagName("a");
//
// for (let i=0;i<accordion.length;i++) {
//     all_links[i].addEventListener("mouseover", function () {
//         all_links[i].classList.add("infinite");
//         all_links[i].classList.add("pulse");
//         console.log(all_links[i])
//     });
//     all_links.addEventListener("mouseout", function () {
//         all_links[i].classList.remove("infinite");
//         all_links[i].classList.remove("pulse")
//     })
// }


resume_btn.addEventListener("mouseover", function () {
    resume_btn.classList.add("infinite");
    resume_btn.classList.add("pulse");
});

resume_btn.addEventListener("mouseout", function () {
    resume_btn.classList.remove("infinite");
    resume_btn.classList.remove("pulse")
});


//todo make an accordion for reflections
// for (let i=0;i<accordion.length;i++){
//     accordion[i].addEventListener("click",function () {
//         this.classList.toggle("active");
//         let panel = this.nextElementSibling;
//         if (panel.style.display === "block"){
//             panel.style.display === "none";
//         }
//         else{
//             panel.style.display === "block";
//         }
//     })
// }