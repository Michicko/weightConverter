const lbsInput = document.querySelector('#lbs');
const form = document.querySelector('form');
const result = document.querySelector('.result');


// event listener
form.addEventListener('submit', convertLbs);

function convertLbs(e) {
    let lbs = parseInt(lbsInput.value);
    let kg = (lbs / 2.205).toFixed(2);

    if (isNaN(kg)) {
        showError('Please check your number');
        setTimeout(() => {
            const div = document.querySelector('.alert');
            div.remove();
        }, 2000);
    } else {
        let html = `
    <h3>Your Weight in Kg is: <span class="res">${kg}</span></h3>
    `;
        result.innerHTML = html;
    }
    e.preventDefault();
}

function showError(msg) {
    const div = document.createElement('div');
    div.className = 'alert';
    div.appendChild(document.createTextNode(msg));
    const content = document.querySelector('.content');
    const form = document.querySelector('form');
    content.insertBefore(div, form);
}