class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.greetings2 = createElement("h2");
  }
  display() {
    this.input.position(displayWidth / 2 - 115, displayHeight / 2 - 200);
    this.input.size(180, 30);
    this.buttonImg.position(displayWidth / 2 - 140, displayHeight / 2 - 135);
    this.buttonImg.size(250, 100);
  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }
  
}
