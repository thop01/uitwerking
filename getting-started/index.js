import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const myName = "Thong";
const appName = "Secuur";
const accounts = [
    { username: "Nordin" ,role: "Docent", password: "hoi"},
    { username: "Mathijs" ,role: "Tester", password: "esther01"},
    { username: "Pascal" ,role: "Admin", password: "aDMinistrator2000"},
];
const welcomeMessage = `
    ${appName} ontwikkeld door ${myName}.  
    ${appName} kan controleren of je toegang heb tot de applicatie.
    Uw login gegevens:
`;
console.log(welcomeMessage);


const inputUsername = await rl.question('Username: ');
const inputPassword = await rl.question('Password: ');

rl.close();
if(checkUser(inputUsername, inputPassword)) {
    startApplication();
}
else{
    console.log("wrong password");
}

function startApplication(){
    console.log("it works, U are logged in");
    // write your code here :)
}

function checkUser(user, password){
    for (let index = 0; index < accounts.length; index++) {
        const account = accounts[index];
        if(user == account.username && password == account.password){
            return account;
        } 
    }
    return false;
}

process.exit(); 
