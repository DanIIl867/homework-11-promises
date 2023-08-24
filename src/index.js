// №1
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Вирішено після ${time}ms`);

delay(2000).then(logger); // Вирішено через 2000 мс
delay(1000).then(logger); // Вирішено через 1000 мс
delay(1500).then(logger); // Вирішено через 1500 мс



// №2
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Lux', active: false },
//   ];
  
// const toggleUserState = (allUsers, userName) => {
//     return new Promise((resolve, reject) => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user
//       );
//       const foundUser = updatedUsers.find(user => user.name === userName);
//       if (foundUser) {
//         resolve(updatedUsers);
//       } else {
//         reject(`User with name ${userName} not found.`);
//       }
//     });
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   toggleUserState(users, 'Mango')
//     .then(logger)
//     .catch(error => console.error(error));
  
//   toggleUserState(users, 'Lux')
//     .then(logger)
//     .catch(error => console.error(error));
  
  
  
  

// №3
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = transaction => {
//     return new Promise((resolve, reject) => {
//       const delay = randomIntegerFromInterval(200, 500);
  
//       setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
  
//         if (canProcess) {
//           resolve({ id: transaction.id, time: delay });
//         } else {
//           reject(transaction.id);
//         }
//       }, delay);
//     });
//   };
  
//   const logSuccess = ({ id, time }) => {
//     console.log(`Транзакція ${id} оброблена за ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
//   };
  
//   makeTransaction({ id: 70, сума: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, сума: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, сума: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, сума: 100 })
//     .then(logSuccess)
//     .catch(logError);