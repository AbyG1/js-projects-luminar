
const height = document.getElementById("inputHeight");
const weight = document.getElementById("inputWeight");
const age = document.getElementById("inputAge");
const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");

const bmiValue = document.getElementById('bmi')

 function calculateBmi(){ 
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);
    const ageValue = parseFloat(age.value)

    if (isNaN(heightValue) || isNaN(weightValue) || isNaN(ageValue) || (!genderMale.checked && !genderFemale.checked)) {
        alert("Fill all details ");
        return;
    }


    let bmi = ((weightValue/(heightValue * heightValue)) * 10000);
    bmi = bmi.toFixed(2);
    displayBmi(bmi);
}

function displayBmi(bmi) {
    bmiValue.value =  bmi;
}