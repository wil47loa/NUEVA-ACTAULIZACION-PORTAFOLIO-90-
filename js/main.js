AOS.init();

const btnBars = document.querySelector('.menu');
const btnTimes = document.querySelector('.cerrarx');
const SideNav = document.querySelector('.lateral');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}
// -----------------------------------------------------------------





let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
 


// const text1 = document.querySelector(".sec-text");
// const texLoad = () => {
//     setTimeout(() => {
//         text1.textContent = "Web Developer";
//     }, 0);
//     setTimeout(() => {
//         text1.textContent = "Baked ejje";
//     }, 4000);
//     setTimeout(() => {
//         text1.textContent = "Yotuber";
//     }, 8000);
// }
// texLoad();

