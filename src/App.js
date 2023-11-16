import Console from '@woowacourse/mission-utils';
import MESSAGES from './Constant.js';
import Car from './Cars.js';

class App {
  async play() {
    const carInput = await Console.readLineAsync(MESSAGES.GAME_START);
    const players = App.makeClassArray(carInput);
    const numberInput = await Console.readLineAsync(MESSAGES.NUMBER_OF_TRY);
    const rounds = App.makeNumber(numberInput);
    // players, rounds 사용해서 진행
    // (실행 결과) 출력 후
    // 무브 - 진행 상황 - 줄 공백 (라운드 수 만큼 반복)
    // 최종 우승자
  }

  static makeClassArray(input) {
    const carClassArray = [];
    const carArray = input.split(',');
    if (carArray.some((car) => car.length > 5)) {
      throw new Error(MESSAGES.ERROR_NAME);
    } else {
      // 각각 클래스 생성하고, 배열에 담기
      carArray.forEach((car) => {
        const carClass = new Car(car);
        carClassArray.push(carClass);
      });
    }
    return carClassArray;
  }

  static makeNumber(input) {
    if (!MESSAGES.NATURAL_NUMBER.test(input)) {
      throw new Error(MESSAGES.ERROR_NUMBER);
    } else {
      return Number(input);
    }
  }
}

export default App;
