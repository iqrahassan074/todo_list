import inquirer from "inquirer";
let todos: string[] = [];
let condition = true;
while (condition ){ 
let addtask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in your todo?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: " do you want to add  more in your todo?",
            default: "false",
        },

    ]
);
todos.push(addtask.todo);
condition = addtask.addmore
console.log(todos);

}