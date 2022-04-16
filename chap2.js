// implement private variable (note :- always use _ to declare private variable)

const Person = ({ name, age, job }) => {
	let _name = name;
	let _age = age;
	let _job = job;
	return {
		getName: () => _name,
		getAge: () => _age,
		getJob: () => _job,
		setJob: newJob => {
			_job = newJob;
		}
	};
};

const person1 = Person({ name: 'Yogendra', age: 28, job: 'developer' });
console.log(person1.getJob());
console.log(person1.getName());
person1.setJob('React Native Developer');
console.log(person1.getJob());
