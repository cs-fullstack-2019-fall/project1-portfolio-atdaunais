let resume_btn = document.getElementById("download_res");
let accordion = document.getElementsByClassName("accordion");


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