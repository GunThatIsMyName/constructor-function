const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`element 확인 바람 ${selection} 없음`);
};


// class Refactor
class Counter {
  constructor(element, val) {
    this.counter = element;
    this.value = val;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);

    this.decreaseBtn.addEventListener("click", this.decrease);
    this.increaseBtn.addEventListener("click", this.increase);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const first = new Counter(getElement(".first-counter"), 200);
const second = new Counter(getElement(".second-counter"), 100);

console.log(first)