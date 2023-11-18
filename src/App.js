import Console from '@woowacourse/mission-utils';
import MESSAGES from './Constant.js';
import Car from './Cars.js';

class App {
  constructor() {
    this.players = [];
  }

  async play() {
    const carInput = await Console.readLineAsync(MESSAGES.GAME_START);
    App.makeClassArray(carInput);
    const numberInput = await Console.readLineAsync(MESSAGES.NUMBER_OF_TRY);
    const rounds = App.makeNumber(numberInput);

    Console.print(MESSAGES.RESULT); // (실행 결과) 출력
    // 무브 - 진행 상황 - 줄 공백 (라운드 수 만큼 반복)
    for (let i = 0; i < rounds; i++) {
      this.players.forEach((car) => car.move());
      this.players.forEach((car) =>
        Console.print(`${car.name} : ${App.makeBar(car.point)}`),
      );
      Console.print('');
    }
    // 최종 우승자
    Console.print(`${MESSAGES.WINNER} : ${누구누구}`);
  }

  static makeClassArray(input) {
    const carArray = input.split(',');
    if (carArray.some((car) => car.length > 5)) {
      throw new Error(MESSAGES.ERROR_NAME);
    } else {
      // 각각 클래스 생성하고, 배열에 담기
      carArray.forEach((car) => {
        const carClass = new Car(car);
        this.carClassArray.push(carClass);
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
}

export default App;
