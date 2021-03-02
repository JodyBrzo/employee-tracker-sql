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
  
    // console.log(`connected as id ${connection.threadId}`);
  });

const questions = () => {
    inquirer.prompt([{
      name: 'questionList',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee role'],
    }]).then((answer) =>{

      if(answer.questionList == 'View All Departments'){

        viewAllDepartments();

      }else if(answer.questionList == 'View All Roles'){
          
        viewAllRoles();
        
      }else if (answer.questionList == 'View All Employees' ){
       
      }else if(answer.questionList == 'Add A Department'){
        
      }else if(answer.questionList == 'Add A Role'){
       
      }else if(answer.questionList == 'Add An Employee'){
        
      }else if(answer.questionList == 'Update Employee role'){
       
      }
    });
    }

    const viewAllDepartments = () => {
        connection.query(`SELECT * FROM department`,

        (err, res) => {
          let data = [];
          res.forEach((department) => {
            data.push (
              {'id': department.id, 
               'name': department.name, 
              });
          });
           console.log('\n');
           console.table(data); 
           console.log('\n');
           console.log('\n');
           console.log('\n');
       });

       questions();
    };

    const viewAllRoles = () => {
        connection.query(`SELECT * FROM role;`,
        (err, res) => {

          let data = [];

          res.forEach((role) => {
            data.push (
              {'id': role.id, 
               'title' : role.title,
               'salary' : role.salary,
               'department_id' : role.department_id,
              });
          });
          console.log('\n');
           console.table(data); 
           console.log('\n');
           console.log('\n');
           console.log('\n');
        }); 

        questions();    
    };

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