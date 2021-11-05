function getMessageProfile(userdata) {
  console.log(userdata);
  nameOfUser = userdata[0].name;
  const container = document.getElementById("container");
  console.log(container);

  container.innerHTML = `<div class="blockWrapper">
  <form id="message-form">
  <p id="title-bar">${nameOfUser}</p>
  <div id="allMessages"></div>
  <div class="send-div">
  <input type="text" name="body" class="feedback-input-messages"required>
  <input type="submit" class="message-submit" value="SEND">
  </div>
  </form>
  </div>
  `;

  document.getElementById("title-bar").addEventListener("click", (e) => {
    getUserProfile(userdata[0]);
  });



  getMessagesFromDog(userdata);

  messagesForm=document.getElementById("message-form")

    messagesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    recip_Id = userdata[0].user_id;
    currentTime = getTimeZoneTime()
    console.log(currentTime);
    const formData = new FormData(messagesForm);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    userDataBeingPassed = userdata;
    insertMessagesFromDog(data, recip_Id, currentTime, userDataBeingPassed);
  });

}

function insertMessagesFromDog(body, recipId, time, userdata) {
  axios
    .post(`api/messages/insertMessage/${recipId}/${time}`, body)
    .then((res) => {
      console.log("succes");
      getMessageProfile(userdata);
    });
}

function getMessagesFromDog(chatting_to) {
  console.log(chatting_to)
  userData=chatting_to
  id=chatting_to[0].user_id
  axios.get(`api/messages/getMessages/${id}`).then((message) => {
    const messages = document.getElementById("allMessages");
    const allMessages = message.data;
    console.log(message.data);

    if(allMessages.length===0){
      div1=document.createElement('div')
      div1.classList.add("outer-div-messages")

      element=document.createElement('p')
      element.textContent="You have no messages"
      element.classList.add("no-messages");
      div1.append(element)

      messages.append(div1)
      
    }
    allMessages.forEach(element => {
      console.log(element)

      
    });
    for (i of allMessages) {
      console.log(i)
      const div = document.createElement("div");
      div.classList.add("bubble")

      const sender = document.createElement("p");
      senderId = i.sender_id;
      console.log(senderId);

      console.log(i.id)

      if(chatting_to===senderId){
        div.classList.add("bubble-left")

      }else{

        div.classList.add("bubble-right")
        const unsend=document.createElement('a')
        unsend.setAttribute('message-id', i.id)
        unsend.textContent="delete"
        unsend.classList.add("unsend")
        unsend.addEventListener('click', (e)=>{
          messageID=e.target.getAttribute('message-id')
          unsendMessageInDog(messageID, userData)
        })

        div.append(unsend)

      }


      const message_body = i.body;
      const body = document.createElement("p");
      body.textContent = message_body;
      body.classList.add("text-body")
      div.append(body);


      const timeSent = i.time;
      console.log(timeSent);
      const formattedTime = getFormattedDate()
      const timestamp = document.createElement("p");
      timestamp.textContent = formattedTime;
      div.append(timestamp);

     
      messages.append(div);
    }
  });
}

// function getUser(id){

// }

function unsendMessageInDog(message_id, userDataInDog){
  console.log(userDataInDog)
  axios.delete(`api/messages/user/${message_id}`).then((res)=>{
    console.log("delted")
    getMessageProfile(userDataInDog)

  })

}

function getFormattedDate() {
  let current_datetime = new Date();
  let formatted_date =
    (current_datetime.getMonth() + 1) +
    "/" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes()
  return formatted_date;
}

function getTimeZoneTime(){
  let time_zone= new Date();
  let timeZoned=time_zone.toISOString()
  return timeZoned
}