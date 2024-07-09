// Base class for shapes
class Shape {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(text, textColor){
  setColor(color)
  }
  render() {
    return `
    <svg version="1.1"
      width="250" height="150"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150"cy="100" r="80" fill='${this.color}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`

  }
}

class Triangle extends Shape {
  constructor(text, textColor){
    setColor(color)
    }
  render() {
    return `
    <svg version="1.1"
      width="250" height="150"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150"cy="100" r="80" fill='${this.color}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`

  }
}

class Square extends Shape {
  constructor(text, textColor){
    setColor(color)
    }
  render() {
    return `
    <svg version="1.1"
      width="250" height="150"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150"cy="100" r="80" fill='${this.color}' />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`

  }
}

module.exports = { Circle, Triangle, Square };
