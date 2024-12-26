const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    // console.log(weight);
    const results = document.querySelector('#results');
    if (height == '' || height < 0 || isNaN(height)) {


        results.innerHTML = `Please give a Valid Height ${height}`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {


        results.innerHTML = `Please give a Valid Weight ${weight}`
    }
else{
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    results.innerHTML= `<span>${bmi}</span>`
}
})