import util from "../helpers/util.js"
import bearBuilder from "./river.js"
import newBear from "../helpers/bearData.js"

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
        id: 'bear2',
        name: 'Fred',
        imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 'bear3',
        name: 'Fred',
        imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    }
]

const getBears = () => {
    return bears
}

const submitForm = (event) => {
    event.preventDefault();
    const brandNewBear = {
        id: `bear${Math.random}`,
        name: document.getElementById('bear-name').value,
        imgUrl: document.getElementById('bear-image').value
    }
    bears.push(brandNewBear)
    pushBearsIntoArray.pushBears(brandNewBear)
    document.getElementById('full-bear-form').reset();
    return brandNewBear
    bearBuilder.bearDomStringBuilder(bears);
    // console.log(bears) 
}

export default { bearFormDomStringBuilder, getBears }