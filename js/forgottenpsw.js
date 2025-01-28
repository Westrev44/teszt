const csatlakozz = document.getElementsByClassName('csatlakozz')[0];
const forum = document.getElementsByClassName('forum')[0];
const home = document.getElementsByClassName('home')[0];




csatlakozz.addEventListener('click', () => {
    window.location.href = '../csatlakozz.html';
});

home.addEventListener('click', () => {
    window.location.href = '../index.html';
});


forum.addEventListener('click', () => {
    window.location.href = '../forum.html';
});