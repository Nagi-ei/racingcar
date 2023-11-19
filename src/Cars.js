// import { MissionUtils } from "@woowacourse/mission-utils";
import { Random } from '@woowacourse/mission-utils';

const cars = [];

class Car {
  constructor(name) {
    this.name = name;
    this.point = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.point += 1;
    }
  }
}

export { cars, Car };
