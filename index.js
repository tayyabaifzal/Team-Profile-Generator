const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const render = require("./src/page-template.js");
const outputPath = path.join(OUTPUT_DIR, "team.html");



// TODO: Write Code to gather information about the development team members, and render the HTML file.












// const teamMembers = [];

// const managerQuestons = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the team manager's name?",
//         validate: answer => {
//             if (answer === "") {
//                 return "Please enter the manager's name!";
//             }
//             return true;
//         }

//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the team manager's id?",
//         validate: answer => {
//             if (answer === "") {
//                 return "Please enter the manager's id!";
//             }
//             return true;
//         }

//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the team manager's email?",
//         validate: answer => {
//             if (answer === "") {
//                 return "Please enter the manager's email!";
//             }
//             return true;
//         }

//     },
//     {
//         type: "input",
//         name: "officeNumber",
//         message: "What is the team manager's office number?",
//         validate: answer => {
//             if (answer === "") {
//                 return "Please enter the manager's office number!";
//             }
//             return true;
//         }

//     }
// ];

// const engineerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the engineer's name?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the engineer's name!");
//             }
//             return true;
//         }

//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the engineer's id?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the engineer's id!");
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the engineer's email?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the engineer's email!");
//             }
//             return true;
//         }
//     },

//     {
//         type: "input",
//         name: "github",
//         message: "What is the engineer's github?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the engineer's github!");
//             }
//             return true;
//         }
//     }
// ];


// const internQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the intern's name?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the intern's name!");
//             }
//             return true;
//         }

//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is the intern's id?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the intern's id!");
//             }
//             return true;
//         }

//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the intern's email?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the intern's email!");
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What is the intern's school?",
//         validate: answer => {
//             if (answer === "") {
//                 return ("Please enter the intern's school!");
//             }
//             return true;

//         },

//     }
// ];

// const addTeamMember = () => {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "addTeamMember",
//             message: "What type of team member would you like to add?",
//             choices: ["Engineer", "Intern", "I don't want to add any more team members"]
//         }
//     ])
//         .then(answer => {
//             if (answer.addteamMember === "Engineer") {
//                 addEngineer();
//             }
//             else if (answer.addteamMember === "Intern") {
//                 addIntern();
//             }
//             else {
//                 console.log("No more team memners to add");
//                 console.log(teamMembers);
//                 console.log("Generating Team profile");
//                 fs.writeFileSync(outputPath, render(teamMembers), "utf-8"); 
//                 console.log("Team Profile Generator");
//             }
//         });
// }

// const addEngineer = () => {
//     inquirer.prompt(engineerQuestions)
//         .then(nameInput => {
//             // const { name, id, email, github } = EngineerInput;
//             const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
//             teamMembers.push(engineer);
//             addTeamMember();
//         });
// }

// const addIntern = () => {
//     inquirer.prompt(internQuestions)
//         .then(answer => {
//             const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
//             teamMembers.push(intern);
//             addTeamMember();
//         });
// }

// inti = () => {
//     inquirer.prompt(managerQuestons)
//         .then(answer => {
//             const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
//             teamMembers.push(manager);
//             addTeamMember();
//         });
// }

// inti();