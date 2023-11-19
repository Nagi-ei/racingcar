import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Constant.js';
import { cars, Car } from './Cars.js';

class App {
  async play() {
    const carInput = await Console.readLineAsync(`${MESSAGES.GAME_START}\n`);
    App.makeClassArray(carInput);
    const numberInput = await Console.readLineAsync(`${MESSAGES.ROUNDS}\n`);
    const rounds = App.makeNumber(numberInput);

    Console.print(`\n${MESSAGES.RESULT}`); // (실행 결과) 출력
    // 무브 - 진행 상황 - 줄 공백 (라운드 수 만큼 반복)
    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => car.move());
      cars.forEach((car) =>
        Console.print(`${car.name} : ${App.makeBar(car.point)}`),
      );
      Console.print('');
    }
    // 최종 우승자
    Console.print(`${MESSAGES.WINNER} : ${App.findWinner()}`);
  }

  static makeClassArray(input) {
    const carArray = input.split(',');
    if (carArray.some((car) => car.length > 5)) {
      throw new Error(MESSAGES.ERROR_NAME);
    } else {
      // 각각 클래스 생성하고, 배열에 담기
      carArray.forEach((car) => {
        const carClass = new Car(car);
        cars.push(carClass);
      });
    }
  }

  static makeNumber(input) {
    if (!MESSAGES.NATURAL_NUMBER.test(input)) {
      throw new Error(MESSAGES.ERROR_NUMBER);
    } else {
      return Number(input);
    }
  }

  static makeBar(point) {
    let progress = '';
    for (let i = 0; i < point; i++) {
      progress += '-';
    }
    return progress;
  }

  // 우승자 선별
  static findWinner() {
    const winnersObj = [];
    // 맥스 포인트 객체 하나
    const winner = cars.reduce((previous, current) => {
      return previous.point > current.point ? previous : current;
    });
    // 맥스 포인트에 해당하는 객체 이름 배열에 넣기
    cars.forEach((player) => {
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
}

export default App;
