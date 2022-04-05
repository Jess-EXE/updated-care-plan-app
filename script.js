let diagnoses = [];
let cardX = [];
let respX = [];
let labsX = [];
let painX = [];
let adlsX = [];
let consX = [];
let diabetesX = [];
let coldX = [];
let nutritionX = [];
let skinX = [];
let giX = [];
let visionX = [];
let confX = [];
let moodX = [];
let contX = [];
let unusedX = [];


const addDx = (ev) => {
    ev.preventDefault();
    let diagnosis = {
        //id: Date.now(),
        dx: document.getElementById('dx').value,
        cat: document.querySelector('input[name="cat"]:checked').value
    }
    diagnoses.push(diagnosis);
    document.querySelector('form').reset();

    //console.warn('added', {diagnoses} );
    //let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(diagnoses, '\t', 2);

    //localStorage.setItem('myDxList', JSON.stringify(diagnoses));
}

function completeCarePlan() {
    for (i = 0; i < diagnoses.length; i++) {
        switch (diagnoses[i].cat) {
            case 'cardiovascular':
                cardX.push(" " + diagnoses[i].dx);
                break;
            case 'respiratory':
                respX.push(" " + diagnoses[i].dx);
                break;
            case 'labs':
                labsX.push(" " + diagnoses[i].dx);
                break;
            case 'pain':
                painX.push(" " + diagnoses[i].dx);
                break;
            case 'adls':
                adlsX.push(" " + diagnoses[i].dx);
                break;
            case 'constipation':
                consX.push(" " + diagnoses[i].dx);
                break;
            case 'diabetes':
                diabetesX.push(" " + diagnoses[i].dx);
                break;
            case 'cold':
                coldX.push(" " + diagnoses[i].dx);
                break;
            case 'nutrition':
                nutritionX.push(" " + diagnoses[i].dx);
                break;
            case 'skin':
                skinX.push(" " + diagnoses[i].dx);
                break;
            case 'gi':
                giX.push(" " + diagnoses[i].dx);
                break;
            case 'vision':
                visionX.push(" " + diagnoses[i].dx);
                break;
            case 'confusion':
                confX.push(" " + diagnoses[i].dx);
                break;
            case 'mood':
                moodX.push(" " + diagnoses[i].dx);
                break;
            case 'continence':
                contX.push(" " + diagnoses[i].dx);
                break;
            case 'unused':
                unusedX.push(" " + diagnoses[i].dx);
                break;
            default:
                alert('No diagnosis entered');
        }
    }

    if (cardX.length > 0) {
        document.getElementById('card-x').classList.toggle('hide');
        let cardDx = document.querySelector('#cardDx');
        cardDx.textContent = cardX;
    }
    if (respX.length > 0) {
        document.getElementById('resp-x').classList.toggle('hide');
        let respDx = document.querySelector('#respDx');
        respDx.textContent = respX;
    }
    if (labsX.length > 0) {
        document.getElementById('labs-x').classList.toggle('hide');
        let labsDx = document.querySelector('#labsDx');
        labsDx.textContent = labsX;
    }
    if (painX.length > 0) {
        document.getElementById('pain-x').classList.toggle('hide');
        let painDx = document.querySelector('#painDx');
        painDx.textContent = painX;
    }
    if (adlsX.length > 0) {
        document.getElementById('adls-x').classList.toggle('hide');
        let adlsDx = document.querySelector('#adlsDx');
        adlsDx.textContent = adlsX;
    }
    if (consX.length > 0) {
        document.getElementById('cons-x').classList.toggle('hide');
        let consDx = document.querySelector('#consDx');
        consDx.textContent = consX;
    }
    if (diabetesX.length > 0) {
        document.getElementById('diabetes-x').classList.toggle('hide');
        let diabetesDx = document.querySelector('#diabetesDx');
        diabetesDx.textContent = diabetesX;
    }
    if (coldX.length > 0) {
        document.getElementById('cold-x').classList.toggle('hide');
        let coldDx = document.querySelector('#coldDx');
        coldDx.textContent = coldX;
    }
    if (nutritionX.length > 0) {
        document.getElementById('nutrition-x').classList.toggle('hide');
        let nutritionDx = document.querySelector('#nutritionDx');
        nutritionDx.textContent = nutritionX;
    }
    if (skinX.length > 0) {
        document.getElementById('skin-x').classList.toggle('hide');
        let skinDx = document.querySelector('#skinDx');
        skinDx.textContent = skinX;
    }
    if (giX.length > 0) {
        document.getElementById('gi-x').classList.toggle('hide');
        let giDx = document.querySelector('#giDx');
        giDx.textContent = giX;
    }
    if (visionX.length > 0) {
        document.getElementById('vision-x').classList.toggle('hide');
        let visionDx = document.querySelector('#visionDx');
        visionDx.textContent = visionX;
    }
    if (confX.length > 0) {
        document.getElementById('conf-x').classList.toggle('hide');
        let confDx = document.querySelector('#confDx');
        confDx.textContent = confX;
    }
    if (moodX.length > 0) {
        document.getElementById('mood-x').classList.toggle('hide');
        let moodDx = document.querySelector('#moodDx');
        moodDx.textContent = moodX;
    }
    if (contX.length > 0) {
        document.getElementById('cont-x').classList.toggle('hide');
        let contDx = document.querySelector('#contDx');
        contDx.textContent = contX;
    }
    if (unusedX.length > 0) {
        document.getElementById('unused-x').classList.toggle('hide');
        let unusedDx = document.querySelector('#unusedDx');
        unusedDx.textContent = unusedX;
    }
}

document.addEventListener('DOMContentLoaded', () =>  {
    document.getElementById('btn').addEventListener('click', addDx);
})
