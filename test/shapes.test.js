const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';



  });

});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
    `<svg version="1.1" 
    width="300" height="200" 
    xmlns="http://www.w3.org/2000/svg">

      <polygon points="150, 18 244, 182 56, 182" fill='red' />
      <text x="150" y="150" font-size="60" text-anchor="middle"  fill="black">Chesse</text>

    </svg>`;


  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';

  });
});
