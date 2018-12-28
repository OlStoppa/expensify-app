import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}; 
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });




// database.ref('expenses')
// .on('value',(snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });



// const expenses = [{
//     description: 'food',
//     amount: 2600,
//     note: 'all fish',
//     createdAt: 1
// },{
//     description: 'beer',
//     amount: 26000,
//     note: 'all ale',
//     createdAt: 0

// },{
//     description: 'wife',
//     amount: 2,
//     note: 'meh',
//     createdAt: 2
// }];

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);
// database.ref().set({
//     name: "Oliver Lennon",
//     age: "34",
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'google'
//     },
//     location: {
//         city: "Taoyuan",
//         country: "Taiwan"
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log(e);
// });

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
// });



// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// });


// database.ref().set("This is my data.");

// database.ref('age').set(35);
// database.ref('location/city').set('New York');
// database.ref('attributes').set({
//     handsome: true,
//     cool: true
// }).then(() => {
//     console.log('attributes set');
// }).catch((e) => {
//     console.log('Something went wrong', e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//  console.log('data is removed');
// }).catch((e) => {
//     console.log(e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });