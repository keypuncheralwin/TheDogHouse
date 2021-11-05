function getAllMessages() {
  axios.get(`api/messages/getAllMessages`).then((allData) => {
    peopleUserIsChattingTo = allData.data.array;
    console.log(peopleUserIsChattingTo);
    const container = document.getElementById("container");
    console.log(container);
    container.innerHTML = `<div class="blockWrapper"><div id='inside-box' class="inside-box"></div></div>`;
    const insideBox = document.getElementById('inside-box')

    const allMessagesHeader = document.createElement('div')
    allMessagesHeader.classList.add('allMessagesHeader')
    allMessagesHeader.innerHTML = `<div id="allMessagesText"> Messages </div>`
    insideBox.append(allMessagesHeader)

    const singleMessageContainer = document.createElement('div')
    singleMessageContainer.classList.add("singleMessageContainer")
    insideBox.append(singleMessageContainer)

    if(peopleUserIsChattingTo.length===0){
      allMessagesHeader.remove()
      
      div1=document.createElement('div')
      div1.classList.add("outer-div-messages")

      element=document.createElement('p')
      element.textContent="You have no messages"
      element.classList.add("no-messages");
      div1.append(element)

      insideBox.append(div1)

    }


    for (i of peopleUserIsChattingTo) {
      console.log(i);
      getuserDetails = `api/messages/user/${i}`;
      getMessageDetails = `api/messages/getMessages/${i}`;
      requestOne = axios.get(getuserDetails);
      requestTwo = axios.get(getMessageDetails);
      axios.all([requestOne, requestTwo]).then(
        axios.spread((...responses) => {

          


          const messageBox = document.createElement("div");
          messageBox.classList.add("messageBox")
          singleMessageContainer.append(messageBox)

          const messageIcon = document.createElement('div')
          messageIcon.innerHTML = `<i class="fas fa-paw fa-2x"></i>`
          messageIcon.classList.add('messageIcon')
          messageBox.append(messageIcon)


          const usersInfo = responses[0].data;
          console.log(usersInfo)
          const arrMessages = responses[1].data;
          console.log(arrMessages)
          messageBox.setAttribute("userI",usersInfo[0])

          messageBox.addEventListener('click', (event)=>{
            console.log(responses[0].data)
            getAllMessagesBetweenUsers(responses[0].data)

          }
        )

        const messageContent = document.createElement('div')
        messageContent.classList.add('messageContent')
        messageBox.append(messageContent)


          user_name = document.createElement("div");
          user_name.classList.add("message-user-name")
          user_name.textContent = usersInfo[0].name;
          messageContent.append(user_name);


          lastItem = arrMessages.slice(-1);
          lastText = document.createElement("p");
          lastText.classList.add("last-text-received")
          lastWords= lastItem[0].body
          finalExchange= lastWords.substring(0, 13);
          lastText.textContent = finalExchange;
          messageContent.append(lastText);

       
          
        })
      );

      
    }
  })
}

