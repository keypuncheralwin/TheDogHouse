function getAllMessages() {
  axios.get(`api/messages/getAllMessages`).then((allData) => {
    peopleUserIsChattingTo = allData.data.array;
    console.log(peopleUserIsChattingTo);
    const container = document.getElementById("container");
    console.log(container);
    container.innerHTML = `<div class="blockWrapper"><div id='inside-box' class="inside-box"></div></div>`;
    insideBox=document.getElementById('inside-box')

    // getuserDetails= `api/messages/user/${i}`
    // getMessageDetails=`api/messages/getMessages/${i}`

    for (i of peopleUserIsChattingTo) {
      console.log(i);
      getuserDetails = `api/messages/user/${i}`;
      getMessageDetails = `api/messages/getMessages/${i}`;
      requestOne = axios.get(getuserDetails);
      requestTwo = axios.get(getMessageDetails);
      axios.all([requestOne, requestTwo]).then(
        axios.spread((...responses) => {
          div = document.createElement("div");
          div.classList.add("friend")
          var img = document.createElement('img'); 
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEH6tEooi7t25bGaYJc9PYKrPBpwPjOy_nrXKHDrgeLgkoC-ZkfpI3MgcUjiL3ueZZKXA&usqp=CAU'; 
          div.append(img)

          const usersInfo = responses[0].data;
          console.log(usersInfo)
          const arrMessages = responses[1].data;
          console.log(arrMessages)
          div.setAttribute("userI",usersInfo[0])

          div.addEventListener('click', (event)=>{
            console.log(responses[0].data)
            getAllMessagesBetweenUsers(responses[0].data)

          }
        )

          user_name = document.createElement("p");
          user_name.classList.add("message-user-name")
          user_name.textContent = usersInfo[0].name;
          div.append(user_name);


          lastItem = arrMessages.slice(-1);
          console.log(lastItem);
          console.log(lastItem[0]);
          lastText = document.createElement("p");
          lastText.classList.add("last-text-received")
          lastWords= lastItem[0].body
          finalExchange= lastWords.substring(0, 13);
          lastText.textContent = finalExchange;
          div.appendChild(lastText);

       
          insideBox.append(div)
        })
      );

      // console.log(val)
    }
  })
}

