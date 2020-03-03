import util from "../helpers/util.js"
import bearBuilder from "./river.js"
import bearData from "../helpers/bearData.js"

const bearFormDomStringBuilder = () => {
    let domString = '';
    domString += '<div class="d-flex justify-content-center">'
    domString += '<form id="full-bear-form">';
    domString += '<div class="form-group">';
    domString += '<input type="text" class="form-control" id="bear-name" aria-describedby="bearName" placeholder="Enter Bear Name">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<input type="text" class="form-control" id="bear-image" placeholder="Bear Image Url">';
    domString += '</div>';
    domString += '<button type="submit" class="btn btn-primary text-align-center d-flex" id="bear-submit-button">Submit</button>';
    domString += '</form>';
    domString += '</div>';
    util.printToDom('bear-form', domString);
    $('#bear-submit-button').click(submitForm);
};

const submitForm = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const brandNewBear = {
        id: `bear${bears.length + 1}`,
        name: $('#bear-name').val(),
        imgUrl: $('#bear-image').val()
    };
    bears.push(brandNewBear);
    bearBuilder.bearDomStringBuilder(bears);
    $('#full-bear-form').trigger('reset');
}

export default { bearFormDomStringBuilder }
