const EventEmitter = require('events')
const { emit } = require('process')

const emitter = new EventEmitter()

// Define an instance of EventEmitter

// 1. Define an event listener(addListener)
emitter.on('greet', (userName, profession) => {
    console.log(`Hello ${userName}, welcome to the event emitter! I am a ${profession}.`)
})

// 2. Emit the greet event
emitter.emit('greet', 'Tanvir Ahmed', 'Software Engineer')

// 3. Define an event listener with multiple arguments
emitter.on('createUser', (user)=>{
    if(user.length > 0){
        for(let i = 0; i < user.length; i++){
            console.log(`User ${user[i]} created successfully!`)
        }
    }
})

emitter.emit('createUser', [1,2,3,4,5])


emitter.on('user', (userDetails) =>{
    console.log(`User Name: ${userDetails.name}\nUser Age: ${userDetails.age}\nUser Profession: ${userDetails.profession}`)
})
emitter.emit('user', {name: 'Tanvir Ahmed', age: 25, profession: 'Software Engineer'})


