const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
    let inquirer = require('inquirer');

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
        type: 'input',
        name: 'sharpeType',
        message: 'Choice Shape:'
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color:'
      },
    ]).then(answers => {
      console.info(`Project name: ${answers.projectName}`);
    });
    // TODO: Create a shape object based on inquirer data
    let inquirer = require('inquirer');

    inquirer.prompt([
      {
        type: 'input',
        name: 'shapeName',
        message: 'Enter the name of the shape:'
      },
      {
        type: 'input',
        name: 'shapeDescription',
        message: 'Enter a description of the shape:'
      }
    ]).then(answers => {
      const shape = {
        name: answers.shapeName,
        description: answers.shapeDescription,
      };
    
      console.log(`Shape created: ${JSON.stringify(shape, null, 2)}`);
    });
    // TODO: Create a svg object and set text and textColor using user Data
    const svg = document.createElementNS('/Challenges/D.OOP/Images/10-oop-homework-demo.png', 'svg');
    svg.setAttribute('width', '100');
    svg.setAttribute('height', '100');
    
    const text = document.createElementNS('/Challenges/D.OOP/Images/10-oop-homework-demo.png', 'text');
    text.textContent = 'Welcome!';
    text.setAttribute('x', '50');
    text.setAttribute('y', '50');
    text.setAttribute('style', `fill: ${userSelectedColor}; font-size: 24px;`);
    
    svg.appendChild(text);
    
    document.body.appendChild(svg);
    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file

module.exports = CLI;
