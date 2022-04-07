let diagnoses = [];
let cardX = [];
let respX = [];
let muscX = [];
let labsX = [];
let confX = [];
let fallsX = [];
let visX = [];
let skinX = [];
let giX = [];
let codeX = [];
let moodX = [];
let nutrX = [];
let aaMedX = [];
let adMedX = [];
let dirMedX = [];
let unusedX = [];


function addDx() {

    let select = document.getElementById("inputState");

    let value = select.options[select.selectedIndex].value;
    
    let userInput = document.getElementById("dx").value;

    var tooltip = document.getElementById("myToolTip");

    if (value.length > 0 && userInput.length > 0) {

        if (userInput.length > 0) {

            tooltip.classList.remove("invisible");

            tooltip.innerHTML = "Diagnosis added!";

        }
    
        let diagnosis = {

            dx: userInput,
            cat: value
        }

        diagnoses.push(diagnosis);

        document.querySelector('form').reset();

    } else {

        alert("You need to enter a diagnosis and a category.")

    }
}

function toolTipReset() {
    var tooltip = document.getElementById("myToolTip");
    tooltip.classList.add("invisible");
}

let count = 0

function completeCarePlan() {
    if (count == 0) {
        count++;
        for (i = 0; i < diagnoses.length; i++) {
            switch (diagnoses[i].cat) {
                case "card":
                    cardX.push(" " + diagnoses[i].dx);
                    break;
                case "resp":
                    respX.push(" " + diagnoses[i].dx);
                    break;
                case "musc":
                    muscX.push(" " + diagnoses[i].dx);
                    break;
                case "labs":
                    labsX.push(" " + diagnoses[i].dx);
                    break;
                case "conf":
                    confX.push(" " + diagnoses[i].dx);
                    break;
                case "falls":
                    fallsX.push(" " + diagnoses[i].dx);
                    break;
                case "vis":
                    visX.push(" " + diagnoses[i].dx);
                    break;
                case "skin":
                    skinX.push(" " + diagnoses[i].dx);
                    break;
                case "gi":
                    giX.push(" " + diagnoses[i].dx);
                    break;
                case "code":
                    codeX.push(" " + diagnoses[i].dx);
                    break;
                case "mood":
                    moodX.push(" " + diagnoses[i].dx);
                    break;
                case "nutr":
                    nutrX.push(" " + diagnoses[i].dx);
                    break;
                case "aaMed":
                    aaMedX.push(" " + diagnoses[i].dx);
                    break;
                case "adMed":
                    adMedX.push(" " + diagnoses[i].dx);
                    break;
                case "dirMed":
                    dirMedX.push(" " + diagnoses[i].dx);
                    break;
                case 'unused':
                    unusedX.push(" " + diagnoses[i].dx);
                    break;
                default:
                    break;
            }
        }
    
        if (cardX.length > 0) {
            document.getElementById('card-x').classList.toggle('hide');
            let cardDx = document.getElementById('cardDx');
            cardDx.textContent = cardX;
        }
        if (respX.length > 0) {
            document.getElementById('resp-x').classList.toggle('hide');
            let respDx = document.getElementById('respDx');
            respDx.textContent = respX;
        }
        if (muscX.length > 0) {
            document.getElementById('musc-x').classList.toggle('hide');
            let muscDx = document.getElementById('muscDx');
            muscDx.textContent = muscX;
        }
        if (labsX.length > 0) {
            document.getElementById('labs-x').classList.toggle('hide');
            let labsDx = document.getElementById('labsDx');
            labsDx.textContent = labsX;
        }
        if (confX.length > 0) {
            document.getElementById('conf-x').classList.toggle('hide');
            let confDx = document.getElementById('confDx');
            confDx.textContent = confX;
        }
        if (fallsX.length > 0) {
            document.getElementById('falls-x').classList.toggle('hide');
            let fallsDx = document.getElementById('fallsDx');
            fallsDx.textContent = fallsX;
        }
        if (visX.length > 0) {
            document.getElementById('vis-x').classList.toggle('hide');
            let visDx = document.getElementById('visDx');
            visDx.textContent = visX;
        }
        if (skinX.length > 0) {
            document.getElementById('skin-x').classList.toggle('hide');
            let skinDx = document.getElementById('skinDx');
            skinDx.textContent = skinX;
        }
        if (giX.length > 0) {
            document.getElementById('gi-x').classList.toggle('hide');
            let giDx = document.getElementById('giDx');
            giDx.textContent = giX;
        }
        if (codeX.length > 0) {
            document.getElementById('code-x').classList.toggle('hide');
            let codeDx = document.getElementById('codeDx');
            codeDx.textContent = codeX;
        }
        if (moodX.length > 0) {
            document.getElementById('mood-x').classList.toggle('hide');
            let moodDx = document.getElementById('moodDx');
            moodDx.textContent = moodX;
        }
        if (nutrX.length > 0) {
            document.getElementById('nutr-x').classList.toggle('hide');
            let nutrDx = document.getElementById('nutrDx');
            nutrDx.textContent = nutrX;
        }
        if (adMedX.length > 0) {
            document.getElementById('adMed-x').classList.toggle('hide');
            let adMedDx = document.getElementById('adepMed');
            adMedDx.textContent = adMedX;
        }
        if (aaMedX.length > 0) {
            document.getElementById('aaMed-x').classList.toggle('hide');
            let aaMedDx = document.getElementById('aaMed');
            aaMedDx.textContent = aaMedX;
        }
        if (dirMedX.length > 0) {
            document.getElementById('dirMed-x').classList.toggle('hide');
            let dirMedDx = document.getElementById('dirMed');
            dirMedDx.textContent = dirMedX;
        }
        if (unusedX.length > 0) {
            document.getElementById('unused-x').classList.toggle('hide');
            let unusedDx = document.querySelector('#unusedDx');
            unusedDx.textContent = unusedX;
        }
    } else {
        alert("You have already completed this care plan, refresh the page to start over.")
    }
}