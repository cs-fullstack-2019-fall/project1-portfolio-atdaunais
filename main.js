let resume_btn = document.getElementById("download_res");
let reflect_btns = document.getElementsByClassName("reflect_btn");
let reflect_content = document.getElementsByClassName("reflect_content");

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

resume_btn.addEventListener("mouseover", function () {
    resume_btn.classList.add("infinite");
    resume_btn.classList.add("pulse");
});

resume_btn.addEventListener("mouseout", function () {
    resume_btn.classList.remove("infinite");
    resume_btn.classList.remove("pulse")
});