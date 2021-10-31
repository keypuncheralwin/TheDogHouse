

function getMessageProfile(userdata){
    var socket = io.connect('http://localhost:3000')
    console.log(userdata)
    nameOfUser=userdata[0].name
    const container = document.getElementById('container')
    console.log(container)
    container.innerHTML = ''
    container.innerHTML=`
    <p>${nameOfUser}<p>
    <div id="allMessages"></div>
    <input type="text" id="messages" name="messages"><br>
    <button id="sendMessage" ><button>
    `

    document.getElementById("messages").addEventListener("click",
    (e)=>{
        socket.emit('new_message', {message : message.val()})

    }
   


    )
  


}