function getMessageProfile(userdata) {
  console.log(userdata[0]);
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



  getMessagesFromDog(userdata[0].user_id);

  messagesForm=document.getElementById("message-form")

    messagesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    recip_Id = userdata[0].user_id;
    currentTime = getFormattedDate();
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
  axios.get(`api/messages/getMessages/${chatting_to}`).then((message) => {
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

    for (i of allMessages) {
      const div = document.createElement("div");
      div.classList.add("bubble")

      const sender = document.createElement("p");
      senderId = i.sender_id;
      console.log(senderId);

      if(chatting_to===senderId){
        div.classList.add("bubble-left")

      }else{

        div.classList.add("bubble-right")

      }


      const message_body = i.body;
      const body = document.createElement("p");
      body.textContent = message_body;
      body.classList.add("text-body")
      div.append(body);


      const timeSent = i.time;
      console.log(timeSent);
      const formatting = timeSent.replace("T", " ");
      const formatting2 = formatting.replace(".000Z", "");
      const formatting3= formatting2.replace(/-/g, "/")
      const formattedTime= formatting3.slice(5)
      const timestamp = document.createElement("p");
      timestamp.textContent = formattedTime;
      div.append(timestamp);

     
      messages.append(div);
    }
  });
}

// function getUser(id){

// }

function getFormattedDate() {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    "T" +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds() +
    ".000Z";
  return formatted_date;
}