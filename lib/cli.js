const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs");

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
     // TODO: Create a shape object based on inquirer data

    inquirer.prompt([
      {
        type: 'input',
        name: 'Text',
        message: 'Enter text:'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:'
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choice Shape:',
        choices: ['triangle', 'circle', 'square']
      },
      {
        name: 'shapeColor',
        message: 'Whats your shape color:',
        type: 'input'
      },
    ]).then(answers => {


    // TODO: Create a svg object and set text and textColor using user Data
    // TODO: Set svg shape with shape object created above
    // TODO: Write your svg file
      let shape = '';

      if (answers.shapeType === 'triangle') {
        shape = new Triangle(answers.Text, answers.textColor, answers.shapeColor);
      } else if (answers.shapeType === 'circle') {
        shape = new Circle(answers.Text, answers.textColor, answers.shapeColor);
      } else {
        shape = new Square(answers.Text, answers.textColor, answers.shapeColor);
      }

      const svg = shape.render();

      writeFile('./logo.svg', svg, (err, data) => {
        if(err) {
          return console.log(err);
        };


        console.log('logo.svg created');
      })

    });
  }
};

module.exports = CLI;
