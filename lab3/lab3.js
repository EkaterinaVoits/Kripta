//VAR 2
let m=521, n=553;

//--------------------------------------------1-------------------------------------------------------

function lab3_task1() {
	let countNumbers = 0;
	let strOfNumbers="";
	console.log("Простые числа в интервале [2, n]: ");

	nextPrime:
	for (let i = 2; i <= n; i++) { // Для всех i...

	  for (let j = 2; j < i; j++) { // проверить, делится ли число..
	    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
	}
	countNumbers++
	strOfNumbers+=i+" ";
}

console.log(strOfNumbers);
console.log("Количество простых чисел интервале = " + countNumbers);

if(countNumbers > n / Math.log(n)) {
	console.log("Больше n/ln(n)");
} else if(countNumbers < n / Math.log(n)) {
	console.log("Меньше n/ln(n)");
} else {
	console.log("Равно n/ln(n)");
}
}


//--------------------------------------------2-------------------------------------------------------

function lab3_task2() {
	let countNumbers = 0;
	let strOfNumbers="";
	console.log("Простые числа в интервале [m, n]: ");

	nextPrime:
	for (let i = m; i <= n; i++) { 

		for (let j = 2; j < i; j++) { 
			if (i % j == 0) continue nextPrime; 
		}
		countNumbers++
		strOfNumbers+=i+" ";
	}

	console.log(strOfNumbers);
	console.log("Количество простых чисел интервале = " + countNumbers);

	if(countNumbers > n / Math.log(n)) {
		console.log("Больше n/ln(n)");
	} else if(countNumbers < n / Math.log(n)) {
		console.log("Меньше n/ln(n)");
	} else {
		console.log("Равно n/ln(n)");
	}
}


//--------------------------------------------3-------------------------------------------------------

//проверка на простое число
function isPrime(n) {

	if (n===1)  {
		return false;
	}
	else if(n === 2)  {
		return true;
	} else   {
		for(var x = 2; x < n; x++)  {
			if(n % x === 0) {
				return false;
			}
		}
		return true;  
	}
}

function isInt(value) {
	return !isNaN(value) && (function(x) {
		return(x | 0) === x;
	})(parseFloat(value))
}


function lab3_task3(n) {
	let mass = [];
	for(i = 1; i < (n ^ 0.5) + 0.1; i++) {
		if(isPrime(i) == 1) {
			let x = n / i;
			if(isInt(x)) {
				n = x;
				mass.push(i);
				i = 1;
			}
		}
	}
	for(i=0;i<mass.length;i++){
		console.log(mass[i])
	}
	return mass;
}


//--------------------------------------------4-------------------------------------------------------

function lab3_task4() {
	let concatNumbersStr = m.toString() + n.toString();
	concatNumbers = Number(concatNumbersStr);
	if(isPrime(concatNumbers)) {
		console.log("число, состоящее из конкатенации цифр m и n простое");
	} else {
		console.log("число, состоящее из конкатенации цифр m и n не является простым");
	}
}


//--------------------------------------------5-------------------------------------------------------

function lab3_task5() {
	console.log("НОД чисел = "+nod(n,m));
}

function nod(n, m) {
	if(m > 0) { 
		var k = n%m;
		return nod(m, k); 
	} 
	else { 
		return n;  
	}
}


//--------------------------------------------6-------------------------------------------------------

function findNod() {
	
	let first_num=prompt("Введите первое число");
	let second_num=prompt("Введите второе число");
	let mass = [first_num, second_num];

	while(mass.length <= 1) {
		mass.push(1);
	}

	let nod;
	let first = lab3_task3(parseInt(mass[0]));
	for(let i = 1; i < mass.length; i++) {
		let second = lab3_task3(parseInt(mass[i]));
		let same = getCommonElements(first, second);
		nod = 1;
		for(let j = 0; j < same.length; j++) {
			nod = nod * same[j];
		}
		first = lab3_task3(nod);
	}
	console.log("НОД(" + mass + ")=" + nod);
	return first;
}

function getCommonElements(a, b) {
	b = new Set(b)
	return [...new Set(a.filter(x => b.has(x)))]
}

function findPrimeNum() {
	let PrimeNumbers = [];
	let first_num=prompt("Введите первое число границы");
	let second_num=prompt("Введите второе число границы");
	let mass = [first_num, second_num];

	for(i = parseInt(mass[0]); i < parseInt(mass[1]); i++) {
		let flag = 0;
		for(j = 1; j < i + 0.1; j++) {
			if(i % j == 0) {
				flag += 1;
			}
		}
		if(flag == 2 || flag == 1) {
			PrimeNumbers.push(i);
		}
	}

	console.log("В диапазоне [" + mass + "] простые числа: " + PrimeNumbers);
}


