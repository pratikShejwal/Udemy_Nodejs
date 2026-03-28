const EventEmitter  = require ('events')

const eventEmitter = new EventEmitter()

//name and listner of event
eventEmitter.on('welcome',(user)=>{
    console.log(`Welcome ${user}`);
})

eventEmitter.once('askPassword',()=>{
    console.log("Ask Password Once");
})

const newListener = () => console.log("Testing listener");
eventEmitter.on('test',newListener)

eventEmitter.emit('test')

// emitting event/invoke
eventEmitter.emit('welcome','tanay')
eventEmitter.emit('askPassword')
eventEmitter.emit('askPassword')

eventEmitter.listeners('test')