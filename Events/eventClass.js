const EventEmitter  = require ('events')

class Chat extends EventEmitter{
    sendMEssage(msg){
        console.log(`msg sent ${msg}`);
        this.emit('messageRecieved',msg)
    }
}

const chat = new Chat()
chat.on('messageRecieved',(msg)=>{
     console.log(`new message ${msg}`)
})

chat.sendMEssage('good morning')