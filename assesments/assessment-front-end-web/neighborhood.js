let restaurantBtn = document.querySelector('#restaurant');
let restaurantArr = ["https://www.maxgillandgrill.com/","https://carminescolorado.com/","https://www.sushiden.net/"];

function getRestaraunt(e){
    let val = Math.floor(Math.random() * restaurantArr.length);
    alert("you should go to this restaurant: " + restaurantArr[val]);
}


restaurantBtn.addEventListener('click',getRestaraunt);