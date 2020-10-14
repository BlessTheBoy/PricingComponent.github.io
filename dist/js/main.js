const toggleSwitch = document.getElementById('switch');
const basicCard = document.getElementById('basic');
const professinalCard = document.getElementById('professional');
const masterCard = document.getElementById('master');

let basicMonthly = "19.99";
let basicAnnually = "199.99";

let professionalMonthly = "24.99";
let professionalAnnually = "249.99";

let masterMonthly = "39.99";
let masterAnnually = "399.99";

toggleSwitch.addEventListener('change', (e) => {
    if (toggleSwitch.checked) {
        transformMonthly(basicCard, basicMonthly);
        transformMonthly(professinalCard, professionalMonthly);
        transformMonthly(masterCard, masterMonthly);
    } else {
        transformAnnually(basicCard, basicAnnually);
        transformAnnually(professinalCard, professionalAnnually);
        transformAnnually(masterCard, masterAnnually);
    }
});

function transformMonthly (card, price){
    card.className = 'card monthly';    
    setTimeout(function(){card.querySelector('.card__price').innerText = price;}, 1500);
    
}

function transformAnnually (card, price){
    card.className = 'card annually';
    setTimeout(function(){card.querySelector('.card__price').innerText = price;}, 1500);
}