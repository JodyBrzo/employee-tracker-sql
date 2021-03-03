const addARole = () => {
    let departments = [];

    connection.query(`SELECT * FROM department`, (err, res) => {
        res.forEach((department) => {
            departments.push ({
            "value": department.id,
            "name": department.name
            });
        });
    });

    inquirer
    .prompt([
        {
        name: 'roleTitle',
        type: 'input',
        message: 'Enter the title of the new Role?',
        },
        {
            name: 'roleSalary',
            type: 'input',
            message: 'Enter the salary for the new Role?',
        },
        {
            type:"list",
            name:"departmentId",
            message:"What department does the role belong too?",
            choices: departments,
          }
    ])
    .then((answer) => {

        departments.forEach((department) => {
            if (department.value === answer.departmentId) 
            {
                let sql = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.roleTitle}', ${parseInt(answer.roleSalary)}, ${parseInt(answer.departmentId)})`;
                connection.query(sql, (err, res) => {
                    viewAllRoles();
                });
            }
          });
    });
}