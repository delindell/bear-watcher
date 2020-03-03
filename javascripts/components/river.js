import util from "../helpers/util.js"
import getBears from "../helpers/bearData.js"

const bearDomStringBuilder = () => {
    let allBears = getBears.getBears()
    let domString = '';
    allBears.forEach((bear) => {
        domString += '<div class="col-6 bear-card">';
        domString += '<div class="card">';
        domString += `<img src="${bear.imgUrl}" class="card-img-top" alt="...">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${bear.name}</h5>`;
        domString += `<button class="tried-button" id="${bear.id}"></button>`;
        domString += '</div>';
        domString += '</div>';      
    });
    util.printToDom('bear-river', domString);
};



export default { bearDomStringBuilder }