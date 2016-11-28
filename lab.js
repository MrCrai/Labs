'use strict';

// Task 1
let planets = ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун', 'Плутон', 'Альдераан', 'Ванкор', 'Корусант', 'Набу', 'Осеон', 'Татуин', 'Эндор', 'Церера', 'Хаумеа', 'Макемаке', 'Эрида', 'Айего', 'Бонадан', 'Дантуин', 'Зиост', 'Риоон'];
console.log('Задание 1:\n' + JSON.stringify(planets) + '\n\n');

// Task 2
planets = planets.filter( (s) => {
	if(s.charAt(0).toUpperCase() == s.charAt(0))
		return true;
	else
		return false; });
console.log('Задание 2:\n' + JSON.stringify(planets) + '\n\n');

// Task 3
planets.sort( (a, b) => {
	if(count(a) > count(b))
		return 1;
	else
		return -1;
	} );
console.log('Задание 3:\n' + JSON.stringify(planets) + '\n\n');

function count(a) {
	let ok = 'уеаоэяиыю';
	let c = 0;
	for(let i = 0; i < a.length; i++) {
		if(ok.indexOf(a[i]) != -1 || ok.toUpperCase().indexOf(a[i]) != -1)
			c++;
	}
	return c;
}

// Task 4
let codes = [];
for(let i = 0; i < planets.length; i++) {
	let word = [];
	for(let j = 0; j < planets[i].length; j++) {
		word.push(planets[i].charCodeAt(j));
	}
	codes.push(word);
}
console.log('Задание 4:\n');
for(let i = 0; i < planets.length; i++) {
	console.log(planets[i] + ": " + JSON.stringify(codes[i]) + "\n");
}

let words = [];
for(let i = 0; i < planets.length; i++) {
	words.push(planets[i].split(' '));
}
console.log('\n');
for(let i = 0; i < planets.length; i++) {
	console.log(JSON.stringify(words[i]) + "\n");
}

// Task 5
