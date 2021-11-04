
function getAllMessagesBetweenUsers(userdata) {
  console.log(userdata[0]);
  nameOfUser = userdata[0].name;
  const container = document.getElementById("container");
  console.log(container);

  container.innerHTML = `<div class="blockWrapper">
  <form id="message-form">
  <p id="title-bar"><span class="backButtonMessages" id="back-button"><i class="fas fa-arrow-left"></i></span>  ${nameOfUser}</p>
  <div id="allMessages"></div>
  <div class="send-div">
  <input type="text" name="body" class="feedback-input-messages"required>
  <input type="submit" class="message-submit" value="SEND">
  </div>
  </form>
  </div>

  `;

  document.getElementById("back-button").addEventListener("click", (e)=>{
    getAllMessages()
  })

  document.getElementById("title-bar").addEventListener("click", (e) => {
    getUserProfile(userdata);
  });



  getMessages(userdata);

  messagesForm=document.getElementById("message-form")

    messagesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    recip_Id = userdata[0].id;
    currentTime = getFormattedDate();
    console.log(currentTime);
    const formData = new FormData(messagesForm);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    userDataBeingPassed = userdata;
    insertMessages(data, recip_Id, currentTime, userDataBeingPassed);
  });

}

function insertMessages(body, recipId, time, userdata) {
  axios
    .post(`api/messages/insertMessage/${recipId}/${time}`, body)
    .then((res) => {
      console.log("succes");
      getAllMessagesBetweenUsers(userdata);
    });
}

function getMessages(chatting_to) {
  console.log(chatting_to)
  userData=chatting_to
  id=chatting_to[0].id
  axios.get(`api/messages/getMessages/${id}`).then((message) => {
    const messages = document.getElementById("allMessages");
    const allMessages = message.data;

    console.log(message.data);

    for (i of allMessages) {
      const div = document.createElement("div");
      // div.classList.add("bubble-left")

      const sender = document.createElement("p");
      senderId = i.sender_id;
      if(id===senderId){
        div.classList.add("bubble-left")

      }else{
        div.classList.add("bubble-right")
        const unsend=document.createElement('span')
        unsend.textContent="UNSEND"
        unsend.addEventListener('click', (e)=>{
          unsendMessage(i.id, userData)
        }
        )

        div.append(unsend)

      }
      console.log(senderId);

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

function unsendMessage(message_id, user_data){
  axios.delete(`api/messages/user/${message_id}`).then((res)=>{
    console.log("delted")
    getAllMessagesBetweenUsers(user_data)

  })

}

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

