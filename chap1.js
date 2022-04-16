const emptyParam = () => console.log('emptyParam');
const multiParam = (val1, val2) => val1 + val2;
const returnObject = () => ({ name: 'yogendra', phoneNumber: '999999999' });
let number = 20;
const add = num => num + 150;
const subtract = num => num - 50;
const multiply = num => num * num;
const division = num => num / 2;
//iteration num value with all function
const functionArrays = [add, subtract, division, multiply, Math.sqrt];

console.log(number);
functionArrays.forEach(func => (number = func(number)));
console.log(number);

const add1 = (x, y) => x + y;
const minus1 = (x, y) => x - y;

const combineAdd1andMinus1 = func => func(20, 30);
console.log(combineAdd1andMinus1(add1));
console.log(combineAdd1andMinus1(minus1));
console.log(combineAdd1andMinus1(Math.max));

//return function
const createPrinter = function () {
	return function () {
		console.log('hello printer');
	};
};
//using arrow
const createAPrinter = () => () => console.log('hello arrow printer');
console.log(createAPrinter()());

const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;
//shorter way of above
const createMultiplier = y => x => x * y;

const doubles = createMultiplier(2);
const triples = createMultiplier(3);
const quadruples = createMultiplier(4);
console.log(doubles(3));
console.log(triples(3));
console.log(quadruples(3));

//closures
const closersFunction = () => {
	const myNumber = 42;
	return () => console.log(`we can also access myNumber in it although it's return function ${myNumber}`);
};

const closers = closersFunction();
closers();
