// const mysql = require('mysql');
const inquirer = require('inquirer');

let questions = () => {
    inquirer.prompt({
      name: 'quesionList',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Rolls', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee role'],
    }).then((answer) =>{
      if(answer.quesionList == 'View All Departments'){
        
      }else if(answer.quesionList == 'View All Rolls'){
        
      }else if (answer.quesionList == 'View All Employees' ){
       
      }else if(answer.quesionList == 'Add A Department'){
        
      }else if(answer.quesionList == 'Add A Role'){
       
      }else if(answer.quesionList == 'Add An Employee'){
        
      }else if(answer.quesionList == 'Update Employee role'){
       
      }
    });
    }

  //function to initialize app
  const init = async () => {
    console.log('Welcome To The Employee Content Managemnet system!');
    try {
        questions(); //Prompt for user questions
    } catch (err) {
      console.log(err);
      console.log('There was an error with user input');
    }
  };

  // Function call to initialize app
  init();