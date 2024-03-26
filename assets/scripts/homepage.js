let searchButton = document.querySelector('.searchButton');
let closeButton = document.querySelector('.closeButton');
let searchBox = document.querySelector('.searchBox');
let menuButton = document.querySelector('.menuButton');
let navigation = document.querySelector('.navigation');
let header = document.querySelector('header.primary');

searchButton.onclick = function(){
    searchBox.classList.add('active');
    closeButton.classList.add('active');
    searchButton.classList.add('active');
    menuButton.classList.add('hide');
    header.classList.remove('open');
}

closeButton.onclick = function(){
    searchBox.classList.remove('active');
    closeButton.classList.remove('active');
    searchButton.classList.remove('active');
    menuButton.classList.remove('hide');
}

menuButton.onclick = function(){
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeButton.classList.remove('active');
    searchButton.classList.remove('active');
}