const errorElem = document.getElementById("error");
const submitBtn = document.getElementById("submit");
const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");

const result = document.getElementById('result');
const resultLength = document.getElementById('prime-length');
const resultNumbers = document.getElementById('prime-number-list');

function isCorrectValue(elem) {
	if (!elem) return false;

	const value = elem.value;

	if (!value || isNaN(value)) return false;

	const number = parseInt(value);
	if (number < 2 || number > 100) return false;
	return true;
}

function errorHandler() {
    errorElem.style.display = "block";
    result.style.display = "none";
	return false;
}

function isPrimeNumber(n) {
	let flag = true;

	for (let i = 2; i <= n - 1; i++)
		if (n % i == 0) {
			flag = false;
			break;
        }
    return flag;
}

function findPrimeNumbers(inputOne, inputTwo) {
	const n1 = +inputOne.value < +inputTwo.value ? +inputOne.value : +inputTwo.value;
	const n2 = +inputOne.value < +inputTwo.value ? +inputTwo.value : +inputOne.value;

	const primeNumbers = [];

	for (let i = n1; i < n2; i++) {
		if (isPrimeNumber(i)) {
			primeNumbers.push(i);
		}
    }
    
    resultLength.innerHTML = primeNumbers.length;
    resultNumbers.innerHTML = primeNumbers.join(',');

    result.style.display = 'block';

	console.log(primeNumbers);
}

submitBtn.addEventListener("click", function () {
	errorElem.style.display = "none";

	if (!isCorrectValue(inputOne) || !isCorrectValue(inputTwo)) return errorHandler();

	findPrimeNumbers(inputOne, inputTwo);
});
