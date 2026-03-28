const ChatRoom = require('./chatRoom.js')

const chat = new ChatRoom()
    
chat.on('join',(user)=>{
        console.log(`${user} joined chat`);
        
})

chat.on('sendMessage',(user,message)=>{
        console.log(`${user}: ${message}`);
        
})

chat.on('leave',(user)=>{
        console.log(`${user} left chat`);
        
})


chat.join('pratik')
chat.join('raven')

chat.sendMessage('raven','Hey Pratik')
chat.sendMessage('pratik','Hey raven ')

chat.leave('raven')

chat.sendMessage('raven','You need to join chat room')