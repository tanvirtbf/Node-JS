const EventEmitter = require('events');
const { emit } = require('process');

const emitter = new EventEmitter();

const eventHistory = {
    login : 0,
    logout : 0,
    signup : 0,
    delete : 0
}

emitter.on('login', ()=>{
    eventHistory.login++;
    console.log('User logged in');
})
emitter.on('logout', ()=>{
    eventHistory.logout++;
    console.log('User logout ');
})
emitter.on('signup', ()=>{
    eventHistory.signup++;
    console.log('User signup');
})
emitter.on('delete', ()=>{
    eventHistory.delete++;
    console.log('User deleted');
})


emitter.emit('login');
emitter.emit('login');
emitter.emit('login');
emitter.emit('logout');
emitter.emit('logout');
emitter.emit('logout');
emitter.emit('logout');
emitter.emit('logout');
emitter.emit('signup');
emitter.emit('signup');
emitter.emit('delete');

console.log(eventHistory);