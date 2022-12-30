console.log('veikia');

const popup = document.querySelector('.popup');
const popupOff = document.querySelector('.popup_off');
console.log(popupOff);

popupOff.addEventListener('click', hidepopup);
function hidepopup(){
    popup.classList.add('hide');
}

setInterval(changePosition, 1000);
function changePosition(){
    popupOff.classList.toggle('position1');
}


setInterval(changePosition2, 3000);
function changePosition2(){
    popupOff.classList.toggle('position2');
}


setInterval(changePosition3, 4000);
function changePosition3(){
    popupOff.classList.toggle('position3');
}