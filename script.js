document.querySelector("button").addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let bmi = weight / (height * height) * 10000;
    bmi = bmi.toFixed(2);  // round to 2 decimal places

    let verdict = "";
    let bmiClass = "";

    if (bmi < 18.5) {
        verdict = "Underweight";
        bmiClass = "underweight";
    } else if (bmi < 24.9) {
        verdict = "Healthy";
        bmiClass = "healthy";
    } else if (bmi < 29.9) {
        verdict = "Overweight";
        bmiClass = "overweight";
    } else {
        verdict = "Obese";
        bmiClass = "obese";
    }
    document.getElementById("bmi").innerHTML = `Your BMI is <strong id="bmi-val">${bmi}</strong>`;
    document.getElementById("verdict").textContent = `(${verdict})`;

    const bmiSpan = document.getElementById("bmi-val");
    bmiSpan.className = bmiClass; // for setting color
});