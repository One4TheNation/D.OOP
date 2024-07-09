const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
     // TODO: Create a shape object based on inquirer data
    
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
        type: 'list',
        name: 'sharpeType',
        message: 'Choice Shape:'
      },
      {
        name: 'shapeColor',
        message: 'Whats your shape color:'
      },
    ]).then(answers => {
      console.info(`Project name: ${answers.projectName}`);
    });

   
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
    
    // TODO: Create a svg object and set text and textColor using user Data
    // TODO: Set svg shape with shape object created above
    // TODO: Write your svg file

module.exports = CLI;
