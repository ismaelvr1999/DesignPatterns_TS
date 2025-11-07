interface Button { render(): void; }
interface CheckBox { render(): void; }

class WindowsButton implements Button {
  render() { console.log("Windows Button"); }
}
class WindowsCheckBox implements CheckBox {
  render() { console.log("Windows CheckBox"); }
}

class LinuxButton implements Button {
  render() { console.log("Linux Button"); }
}
class LinuxCheckBox implements CheckBox {
  render() { console.log("Linux CheckBox"); }
}

interface UIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

class WindowsUIFactory implements UIFactory {
  createButton() { return new WindowsButton(); }
  createCheckBox() { return new WindowsCheckBox(); }
}

class LinuxUIFactory implements UIFactory {
  createButton() { return new LinuxButton(); }
  createCheckBox() { return new LinuxCheckBox(); }
}

// Client code
function buildUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckBox();
  button.render();
  checkbox.render();
}

buildUI(new WindowsUIFactory());
buildUI(new LinuxUIFactory());
