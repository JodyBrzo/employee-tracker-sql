const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'SnowPlants45',
    database: 'employee_trackerdb',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
  
    console.log(`connected as id ${connection.threadId}`);
  });

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