// import brandNewBear from "../components/bearForm.js"

const getBears = () => {
    return bears
};

// const pushBears = () => {
//     bears.push(brandNewBear.submitForm())
// }



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

// const submitForm = (e) => {
//     console.log('hello')
//     e.preventDefault();
//     const brandNewBear = {
//         id: `bear${bears.length + 1}`,
//         name: document.getElementById('bear-name').value,
//         imgUrl: document.getElementById('bear-image').value
//     }
//     bears.push(brandNewBear)
//     document.getElementById('full-bear-form').reset();
//     bearBuilder.bearDomStringBuilder(bears);
//     console.log(bears) 




export default { getBears }

