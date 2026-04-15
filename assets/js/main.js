// special countdown
let dayItem = document.querySelector("#days");
let hoursItems = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec")

let countDown = () => {
    let futureDate = new Date("2026-04-15");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days= Math.floor(myDate / 1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60) % 24;
    let min = Math.floor(myDate/1000/60) % 60;
    let sec = Math.floor(myDate/1000) % 60;

    dayItem.innerHTML = days;
    hoursItems.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

}
countDown()
setInterval(countDown, 1000)

//Scroll back to top //
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll>= 250){
            scrollTopButton.classList.add('scrollActivate');
        } else {
            scrollTopButton.classList.remove('scrollActivate');
        }
    }
}
scrollTopBack();


// nav hide //
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})