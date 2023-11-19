import Car from './Cars.js';
import MESSAGES from './Constant.js';

// const carNames = 'asfded,sdf,ttt';

// const a = carNames.split(',');

// console.log(a);
// console.log(a[0].length);
// console.log(a.some((car) => car.length > 5));

// const carClassArray = [];
// const carArray = carNames.split(',');
// if (carArray.some((car) => car.length > 5)) {
//   throw new Error(MESSAGES.ERROR_NAME);
// } else {
//   // 각각 클래스 생성하고, 배열에 담기 (생성까지만 함)
//   carArray.forEach((car) => {
//     const carClass = new Car(car);
//     carClassArray.push(carClass);
//   });
// }

// console.log(carClassArray);

const a = new Car('aaa');
a.move();
a.move();
a.move();
a.move();
a.move();
const b = new Car('bbb');
b.move();
b.move();
b.move();
const c = new Car('ccc');
c.move();
c.move();

console.log(a.point);
console.log(b.point);
console.log(c.point);

const testArray = [a, b, c];

function findWinner() {
  const winnersObj = [];
  // 맥스 포인트 객체 하나
  const winner = testArray.reduce((previous, current) => {
    return previous.point > current.point ? previous : current;
  });
  // 맥스 포인트에 해당하는 객체 이름 배열에 넣기
  testArray.forEach((player) => {
    if (winner.point == player.point) {
      winnersObj.push(player);
    }
  });
  // 그 이름을 스트링으로 엮어서 리턴
  let winners = '';
  winnersObj.forEach((winner) => {
    winners += winner.name;
    winners += ', ';
  });
  winners = winners.slice(0, -2);
  return winners;
}

console.log(findWinner());
