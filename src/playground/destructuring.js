// Object destrucuring

// const person = {
// 	name: 'Oliver',
// 	age: 34,
// 	location: {
// 		city: 'Taoyuan',
// 		temp: 20
// 	}
// };

// const { name: firstName = 'Annonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature){
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [product, , medium] = item;
console.log(`A medium ${product} costs ${medium}.`)