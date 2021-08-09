const menu = document.querySelector(".menu");
const menuRemove = document.querySelector(".menu-remove");
const search = document.querySelector(".search");
const bottomList = document.querySelector(".bottom");

menu.onclick=function(){
    search.classList.add("active")
    bottomList.classList.add("active")
}
menuRemove.onclick=function(){
    search.classList.remove("active")
    bottomList.classList.remove("active")
}
window.onscroll=function(){
    search.classList.remove("active")
    bottomList.classList.remove("active")
}