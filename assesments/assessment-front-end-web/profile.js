let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

function showColor(e){
    e.preventDefault();
    alert("MY FAVORITE COLOR IS ORANGE!");
}

function showPlace(e){
    e.preventDefault();
    alert("MY FAVORITE PLACE IS TIMBUKTOO!");
}

function showRitual(e){
    e.preventDefault();
    alert("MY FAVORITE RITUAL IS WUDU!");
}

colorBtn.addEventListener('click', showColor);
placeBtn.addEventListener('click', showPlace);
ritualBtn.addEventListener('click', showRitual);
