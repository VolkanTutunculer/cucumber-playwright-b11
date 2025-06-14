import { setWorldConstructor, World } from "@cucumber/cucumber";

class CustomWorld extends World{
  constructor(options) {
    super(options);

    // Declare fixtures
    this.browser = null;
    this.context = null;
    this.page = null;

  }
}

setWorldConstructor(CustomWorld);