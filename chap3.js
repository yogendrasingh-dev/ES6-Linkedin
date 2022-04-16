//Higher Order Function (note:- it's divide single responsibilty )

// const divide = (x, y) => {
// 	//so can manage and enhance below check functionality using Higher Order function
// 	if (y === 0) {
// 		console.log('Error: dividing by zero');
//    return null;
// 	}
// 	return x / y;
// };

const divide = (x, y) => x / y;

const secondArgumentIsntZero =
	func =>
	(...args) => {
		if (args[1] === 0) {
			console.log('Error: dividing by zero');
			return null;
		}
		return func(...args);
	};

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(10, 0));
console.log(divideSafe(10, 5));

//another example
const words = ['c++', 'java', 'javascript', 'ruby', 'kotlin', 'flutter', 'react'];

const createLengthTest = minLength => word => word.length > minLength;
const longWords = words.filter(createLengthTest(4));
console.log(longWords);

//sort,reverse,push,pop mutate original array so be careful while it's using.
const numbers = [1, 2, 13, 4, 15, 6, 7, 8, 9];

console.log(numbers.slice(2, 5));
//slice holds copy of original and doesn't mutate original array so first use it
//then operate mutation operation like reverse sort etc.
console.log(numbers.slice().reverse());
const ascending = (a, b) => {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
};
console.log(numbers.slice().sort(ascending));
console.log(words.slice().sort());

//reduce
//if doesn't provide second arg or default acc value then it takes first value as a acc value
const sum = [10, 20, 30, 40];
const total = sum.reduce((acc, current) => {
	console.log(acc);
	return acc + current;
}, 2);
console.log(total);

//create our own map function
//using for loop
const myMap = (arr, func) => {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		newArray.push(func(arr[i]));
	}
	return newArray;
};

const checkEx = ['a', 'b', 'c', 'd'];
console.log(myMap(checkEx, x => x.toUpperCase()));
//using reduce function
const map = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);
console.log(map(checkEx, x => x.toUpperCase()));

const electionVotes = ['Harry', 'Rick', 'Ben', 'Harry', 'Mick', 'Harry', 'Rick'];

const tallyVotes = votes => {
	return votes.reduce(
		(acc, name) => ({
			...acc,
			[name]: acc[name] ? acc[name] + 1 : 1
		}),
		{}
	);
};

console.log(tallyVotes(electionVotes));

let myarr = 'wordddss';

function countNumbersWords(arr, sec) {
	let splitArr = arr.split('');
	let secArr = sec.split('');
	const result = splitArr.reduce(
		(acc, word) => ({
			...acc,
			[word]: acc[word] ? acc[word] + 1 : 1
		}),
		{}
	);
	const results = secArr.reduce(
		(acc, word) => ({
			...acc,
			[word]: acc[word] ? acc[word] + 1 : 1
		}),
		{}
	);

	let finalResult = null;
	for (let key in result) {
		for (let key2 in results) {
			if (result[key] !== results[key2]) {
				finalResult = 'not anagram';
			} else {
				finalResult = 'yes anagram';
			}
		}
	}
	return finalResult;
}

console.log(countNumbersWords(myarr, 'rowdddss'));
// another to find anagram

const countOccurrences = arr => {
	return arr.reduce(
		(acc, str) => ({
			...acc,
			[str]: acc[str] ? acc[str] + 1 : 1
		}),
		{}
	);
};

const hasSameLetterCount = (word1, word2) => {
	const word1Count = countOccurrences(word1.split(''));
	const word2Count = countOccurrences(word2.split(''));
	return (
		Object.keys(word1Count).length == Object.keys(word2Count).length &&
		Object.keys(word1Count).every(letter => word1Count[letter] == word2Count[letter])
	);
};

const findAnagram = (word, allWords) => {
	return allWords.filter(entry => hasSameLetterCount(word, entry)).filter(anagram => anagram != word);
};

console.log(findAnagram('cinema', ['anemic', 'alteration', 'macbook air', 'cinema', 'marry', 'tom', 'iceman']));
