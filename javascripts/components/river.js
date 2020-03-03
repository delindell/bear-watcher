import util from "../helpers/util.js"
import getBears from "../helpers/bearData.js"



const bearDomStringBuilder = () => {
    let allBears = getBears.getBears()
    let domString = '';
    allBears.forEach((bear) => {
        domString += `<div class="col-4">`
        domString += `<div id="${bear.id}" class="bear-card">`
        domString += `<img src="${bear.imgUrl}" class="card-img-top bear-photo" alt="image-of-bear">`
        domString += `<div class="card-body">`;
        domString += `<h2 class="card-title" id="bear-name">${bear.name}</h2>`;
        domString += '</div>';        
        domString += `<button class="btn btn-danger catch-fish-button" id="${bear.id}">Catch Fish</button>`
        domString += '</div>';
        domString += '</div>';      
    });
    util.printToDom('bear-river', domString);
};



export default { bearDomStringBuilder }
