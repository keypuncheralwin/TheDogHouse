function getAllMessages() {
  axios.get(`api/messages/getAllMessages`).then((allData) => {
    peopleUserIsChattingTo = allData.data.array;
    console.log(peopleUserIsChattingTo);
    const container = document.getElementById("container");
    console.log(container);
    container.innerHTML = "";

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
          user_name.textContent = usersInfo[0].name;
          div.append(user_name);


          lastItem = arrMessages.slice(-1);
          console.log(lastItem);
          console.log(lastItem[0]);
          lastText = document.createElement("p");
          lastText.textContent = lastItem[0].body;
          div.appendChild(lastText);

       
          container.append(div)
        })
      );

      // console.log(val)
    }
  })
}

