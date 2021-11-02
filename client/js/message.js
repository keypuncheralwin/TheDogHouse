function getMessageProfile(userdata) {
  console.log(userdata);
  nameOfUser = userdata[0].name;
  const container = document.getElementById("container");
  console.log(container);
  container.innerHTML = "";
  container.innerHTML = `
    <p>${nameOfUser}<p>
    <div id="allMessages"></div>
    `;

  const form=document.createElement('form')
  form.innerHTML=`
  <input type="text" name="body" class="feedback-input" required>
  <input type="submit">
  
  `


  getMessages(userdata[0].user_id);

  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    recip_Id = userdata[0].user_id;
    currentTime = getFormattedDate();
    console.log(currentTime)
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    userDataBeingPassed=userdata
    insertMessages(data, recip_Id, currentTime, userDataBeingPassed);
  });

  container.append(form)
}

function insertMessages(body, recipId, time, userdata) {
  axios
    .post(`api/messages/insertMessage/${recipId}/${time}`, body)
    .then((res) => {
      console.log("succes");
      getMessageProfile(userdata)
    });
}

function getMessages(chatting_to) {
  axios.get(`api/messages/getMessages/${chatting_to}`).then((message) => {
    const messages = document.getElementById("allMessages");
    const allMessages = message.data;
    console.log(message.data);

    for (i of allMessages) {
      const div = document.createElement("div");

      const sender = document.createElement("p");
      senderId = i.sender_id;
      console.log(senderId);
      userName = axios.get(`api/messages/user/${senderId}`).then((res) => {
        console.log(res.data[0].name);
        return res.data[0].name;
      });
      
        userName.then((name) => {
          console.log(name);
          sender.textContent = name;
          div.insertBefore(sender, div.childNodes[0]);
        });

        const timeSent = i.time;
        console.log(timeSent);
        const formatting = timeSent.replace("T", " ");
        const formattedTime = formatting.replace(".000Z", "");
        const timestamp = document.createElement("p");
        timestamp.textContent = formattedTime;
        div.append(formattedTime);
  
        const message_body = i.body;
        const body = document.createElement("p");
        body.textContent = message_body;
        div.append(body);
  
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
  current_datetime.getSeconds()+
  ".000Z"
  ;

  return formatted_date;
}
