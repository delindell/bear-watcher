import util from "../helpers/util.js"
import bearBuilder from "./river.js"

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

const bears = [
    {
        id: 'bear1',
        name: 'Fred',
        imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 'bear1',
        name: 'Fred',
        imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 'bear1',
        name: 'Fred',
        imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    }


]

console.log(bears)

const getBears = () => {
    return bears
}

const submitForm = (e) => {
    e.preventDefault();
    const brandNewBear = {
        id: `bear${bears.length + 1}`,
        name: document.getElementById("bear-name").value,
        imgUrl: document.getElementById('bear-image').value
    }
    bears.push(brandNewBear)
    document.getElementById('full-bear-form').reset();
    bearBuilder.bearDomStringBuilder(bears);
    console.log(bears) 
}

export default { bearFormDomStringBuilder, getBears }