var events = require('events');
var eventEmit = new events.EventEmitter();

var test = () => console.log(1);

eventEmit.on('scream', test);
eventEmit.emit('scream');