'use strict';

// Task 1
let planets = [
  'Меркурий',
  'Венера',
  'Земля',
  'Марс',
  'Юпитер',
  'Сатурн',
  'Уран',
  'Нептун',
  'Плутон',
  'Альдераан',
  'Ванкор',
  'Корусант',
  'Набу',
  'Осеон',
  'Татуин',
  'Эндор',
  'Церера',
  'Хаумеа',
  'Макемаке',
  'Эрида',
  'Айего',
  'Бонадан',
  'Дантуин',
  'Зиост',
  'Риоон'
];
console.log('Планеты:\n' + JSON.stringify(planets) + '\n\n');

// Task 2
planets = planets.filter( (s) => {
	if(s.charAt(0).toUpperCase() == s.charAt(0))
		return true;
	else
		return false; });
console.log('Фильтрация по заглавной первой букве:\n' + JSON.stringify(planets) + '\n\n');

// Task 3
planets.sort( (a, b) => {
	if(count(a) > count(b))
		return 1;
	else
		return -1;
	} );
console.log('Сортровка по кол-ву гласных букв:\n' + JSON.stringify(planets) + '\n\n');

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
console.log('Массив кодов символов для каждого элемента:\n');
for(let i = 0; i < planets.length; i++) {
	console.log(planets[i] + ": " + JSON.stringify(codes[i]) + "\n");
}

let words = [];
for(let i = 0; i < planets.length; i++) {
	words.push(planets[i].split(' '));
}
console.log('Массив слов в каждом элементе:\n');
for(let i = 0; i < planets.length; i++) {
	console.log(JSON.stringify(words[i]) + "\n");
}

// Task 5
global = {};
global.api={}

global.api.searchBySubstr = function(subs) {
  let ans = [];
  for(let i = 0; i < planets.length; i++) {
    if(planets[i].indexOf(subs) != -1)
        ans.push(planets[i]);
  }
  return ans;
}

global.api.searchInText = function(text) {
  let ans = [];
  for(let i = 0; i < planets.length; i++) {
    if(text.indexOf(planets[i]) != -1) {
      ans.push(planets[i]);
    }
  }
  return ans;
}
