
function getAllMessages(){
    axios.get(`api/messages/getAllMessages`).then((allData)=>{
        peopleUserIsChattingTo=allData.data.array
        console.log(peopleUserIsChattingTo)
        const container = document.getElementById("container");
        console.log(container);
        container.innerHTML = "";

        for(i of peopleUserIsChattingTo){
            console.log(i)
            axios.get(`api/messages/user/${i}`).then((user)=>{
                console.log(user.data)
                div=document.createElement('div')
                user_name=document.createElement('p')
                user_name.textContent=user.data[0].name
                div.append(user_name)

                axios.get(`api/messages/getMessages/${i}`).then((arrMessages)=>{
                    lastItem=arrMessages.data.slice(-1)
                    console.log(lastItem[0])
                    lastText=document.createElement('p')
                    lastText.textContent=lastItem[0].body
                    div.append(lastText)

                    container.append(div)

                })

            })
              
        }

    })
}