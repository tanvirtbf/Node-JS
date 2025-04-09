import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const todos = []

const showMenu = () => {
    console.log("\n 1: Add a Task")
    console.log("\n 2: View Task")
    console.log("\n 3: Exit")
    rl.question("\n Choose an option: ", handleInput)
}

const handleInput = (option) => {
    if(option === '1') {
        rl.question("\n Enter a task: ", (task)=>{
            todos.push(task)
            console.log(`\n Task added: ${task}`)
            showMenu()
        })
    }else if(option === '2'){
        console.log("\n Enter the task number to view ")
        todos.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`)
        })
        showMenu()
    }else if(option === '3'){
        console.log("\n Good Byee!")
        rl.close()
    }else {
        console.log("\n Invalid option, please try again.")
        showMenu()
    }
}
showMenu()
