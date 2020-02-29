import util from "../helpers/util.js"
import getBears from "../helpers/bearData.js"

const bearDomStringBuilder = () => {
    let domString = '';
    getBears.getBears().forEach((bear) => {
        domString += '<div class="card col-3" style="width: 18rem;">'
        domString += `<img src="${bear.imgUrl}" class="card-img-top" alt="...">`
        domString += `<div class="card-body" id="${bear.id}>`
        domString += `<h5 class="card-title">${bear.name}</h5>`
        domString += '<button class="tried-button"><i class="fas fa-fish"></i></button>'
        domString += '</div>'
        domString += '</div>'
        console.log(bear)        
    });
    util.printToDom('bear-river', domString)
    triedEvent();
}

const triedEvent = () => {
    let triedButton = document.getElementsByClassName('tried-button');
    for (let i = 0; i < triedButton.length; i++){
        triedButton[i].addEventListener('click', triedToCatchFish)
    }
}

const triedToCatchFish = () => {
    let bears = getBears.getBears()
    console.log(bears.name)
}

export default { bearDomStringBuilder }