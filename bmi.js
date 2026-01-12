let content = document.querySelector(".content");
const heightInput = document.querySelectorAll("input")[0];
const weightInput = document.querySelectorAll("input")[1];
let btn = document.querySelector("button");
let result = document.getElementById("result");

btn.addEventListener("click",() => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.style.display = "block"; 
        result.innerText="Please enter valid height and weight";
        return;
    }

    const bmi = calculate(weight,height);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    result.style.display = "block"; 
    result.innerText = `BMI: ${bmi.toFixed(2)} (${category})`;
});

function calculate(weight, height){
    const heightM = height/100;
    return weight/(heightM * heightM);
}
