const {prompt} = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");

const employees = []

const additionalQuestions = {
    'Engineer': {
        message: "What is this engineer's github?",
        name: "extra",
        type: "input"
    },
    'Manager': {
        message: "What is this manager's office number?",
        name: "extra",
        type: "input"
    },
    Intern: {
        message: "What is this intern's schoool?",
        name: "extra",
        type: "input"
    },
}

const start = () => {
    prompt({
        message: "What would you like to do?",
        type: "list",
        name: "choice",
        choices: ['CREATE AN EMPLOYEE', 'GENERATE HTML']
    }).then(res => {
        switch(res.choice){
            case 'CREATE AN EMPLOYEE':
            return createEmployee();
            case 'GENERATE HTML':
            return generateHTML()
            default: 
            
        }
    })
}


const createEmployee = () => {
    prompt([
        {
            message: "What type of employee?",
            type: "list",
            name: "type",
            choices: ['Engineer', 'Manager', "Intern"]
        },
        {
            message: "What is the name of the employee?",
            type: "input",
            name: "name"
        },
        {
            message: "What is the id of the employee?",
            type: "input",
            name: "id"
        },
        {
            message: "What is the email of the employee?",
            type: "input", 
            name: "email"
        }
    ]).then(emp => {
        const extraQ = additionalQuestions[emp.type];

        prompt(extraQ).then(({extra})=> {
            console.log("extra value --- ", extra);

            const newEmp = new Engineer(emp.name, emp.id, emp.email, extra);
            employees.push(newEmp);

            console.log(`${emp.type} Created!`);
            setTimeout(start, 1500)
        })
    })
}

const generateHTML = () => {
    const html = `
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <div class="p-4">
        <h1 class="text-center mb-5">EMPLOYEE DIRECTORY</h1>
        <div class="container-fluid" style="display:flex; justify-content: space-evenly">
            ${employees.map(emp => emp.makeHTML()).join("\n")}
        </div>
    </div>
</body>

</html>
    `
    fs.writeFileSync("./output.html", html);

    console.log("COMPLETE!")
    //create an html string then write to fiel using fs
}

start()