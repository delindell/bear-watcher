import util from "../helpers/util.js"
// import bears from "../helpers/bearData.js"
import getBears from "./bearForm.js"

const bearDomStringBuilder = () => {
    let domString = '';
    getBears.getBears().forEach((bear) => {
        domString += '<div class="card col-3" style="width: 18rem;">'
        domString += `<img src="${bear.imgUrl}" class="card-img-top" alt="...">`
        domString += `<div class="card-body" id="${bear.id}>`
        domString += `<h5 class="card-title">${bear.name}</h5>`
        domString += '</div>'
        domString += '</div>'
        console.log(bear)        
    });
    util.printToDom('bear-river', domString)
}

export default { bearDomStringBuilder }