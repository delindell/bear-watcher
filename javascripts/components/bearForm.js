import util from "../helpers/util.js"
import bearBuilder from "./river.js"
import bearData from "../helpers/bearData.js"

console.log('hello')

const bearFormDomStringBuilder = () => {
    let domString = ''
    domString += '<form id="full-bear-form">'
    domString += '<div class="form-group">'
    domString += '<input type="text" class="form-control" id="bear-name" aria-describedby="bearName" placeholder="Enter Bear Name">'
    domString += '</div>'
    domString += '<div class="form-group">'
    domString += '<input type="text" class="form-control" id="bear-image" placeholder="Bear Image Url">'
    domString += '</div>'
    domString += '<button type="submit" class="btn btn-primary" id="bear-submit-button">Submit</button>'
    domString += '</form>'
    util.printToDom('bear-form', domString)
    formEvent()
}

const formEvent = () => {
    document.getElementById('bear-submit-button').addEventListener('click', submitForm)
}




const submitForm = (event) => {
    console.log('hellow')
    event.preventDefault();
    const bears = bearData.getBears()
    const brandNewBear = {
        id: `bear${bears.length + 1}`,
        name: document.getElementById('bear-name').value,
        imgUrl: document.getElementById('bear-image').value
    }
    bears.push(brandNewBear)
    console.log(brandNewBear, bears)
    bearBuilder.bearDomStringBuilder(bears)
    document.getElementById('full-bear-form').reset();
}

export default { bearFormDomStringBuilder }