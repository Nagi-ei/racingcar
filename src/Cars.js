'use strict';

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   if (i > 8) {
//     break;
//   }
//   console.log(i);
// }

// const fruits = ['apple', 'strawberry', 'peach', 'grape', 'plum'];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit) => console.log(fruit));

// let fruitString = '';
// fruits.forEach((fruit) => (fruitString += fruit));
// console.log(fruitString);

// let joinString = fruits.join(', ');
// console.log(joinString);

// let backToArray = joinString.split(', ');
// console.log(backToArray);

// let numbers = [1, 2, 3, 4, 5];
// let orderChange = numbers.sort();
// console.log(orderChange);

// class Student {
//   constructor(name, age, enrolled, score) {
//     this.name = name;
//     this.age = age;
//     this.enrolled = enrolled;
//     this.score = score;
//   }
// }

// const students = [
//   new Student('A', 29, true, 45),
//   new Student('B', 28, false, 80),
//   new Student('C', 30, true, 90),
//   new Student('D', 40, false, 66),
//   new Student('E', 18, true, 88),
// ];

// function findA() {
//   for (let each of students) {
//     if (each.score >= 90) {
//       return each;
//     }
//   }
// }

// const aa = findA();
// console.log(aa);

// const result = students.find((student) => student.score >= 90);
// console.log(result);

// const enrolledStudents = [];
// for (let each of students) {
//   if (each.enrolled === true) {
//     enrolledStudents.push(each);
//   }
// }

// students.forEach((each) => {
//   if (each.enrolled) {
//     enrolledStudents.push(each);
//   }
// });
// console.log(enrolledStudents);

// 콜백
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === 'nagi' && password === 'asdf') ||
//         (id === 'soo' && password === 'qwer')
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error('not found'));
//       }
//     }, 1000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === 'nagi') {
//         onSuccess({ name: 'nagi', role: 'admin' });
//       } else {
//         onError(new Error('no access'));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// userStorage.loginUser(
//   'nagi',
//   'asdf',
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         console.log(
//           `Hello, ${userWithRole.name}, you have a ${userWithRole.role}`,
//         );
//       },
//       (error) => {
//         console.log(error);
//       },
//     );
//   },
//   (error) => {
//     console.log(error);
//   },
// );

// 프로미스
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'nagi' && password === 'asdf') ||
          (id === 'soo' && password === 'qwer')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'nagi') {
          resolve({ name: 'nagi', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
// userStorage
//   .loginUser('nagi', 'asdf')
//   .then(userStorage.getRoles)
//   .catch(console.log)
//   .then((user) => console.log(`Hello, ${user.name}, you have a ${user.role}`))
//   .catch(console.log);

async function login() {
  try {
    const aa = await userStorage.loginUser('soo', 'qwer');
    const bb = await userStorage.getRoles(aa);
    console.log(`Hello, ${bb.name}, you have a ${bb.role}`);
  } catch {
    console.log(Error);
  }
}

login();
