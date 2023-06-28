// Event module
// Node.js has built in module called "Events" where you can create-, fire-, and listen for your own events.

// Ex 1- Registering for the event to be fired only one time using once.

const EventEmitter = require('events')

const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('Your Name is Vikalp')
});
event.on('sayMyName', () => {
    console.log('Your Name is Mishra')
});
event.on('sayMyName', () => {
    console.log('Your Name is Vampire')
});
event.emit('checkpage', 200, 'ok');
