function createProfilePage(){
    const container=document.getElementById("container")
    container.innerHTML=""
    
    // axios.get(`/api/sessions`).then((response)=>{
    //     console.log(response.data)

    //     const name=response.data[0].name
    //     const email=response.data[0].email
    //     const state=response.data[0].state_code
    //     const fact=response.data[0].fact

    //     container.innerHTML = `
    //     <div class="block">
    //     <h1 class="largeFont">Hey, ${name} how are you?</h1>
    //     <div class="profile-button" id="profile-page">Profile</div>
    //     <div class="profile-button">Favorites</div>
    //     <div class="profile-button" >Add a dog</div>
    //     <button id="log-out">Log out</div>
    //     </div>
    //     `;

    //     document.getElementById("log-out").addEventListener("click", ()=>{
    //         axios.delete(`/api/sessions`).then((response)=>{
    //             console.log(response.data)
    //              viewAllDogs()

    //             createNav()

    //     document.getElementById("profile-page").addEventListener("click"

    //     )
               
        
        
    //         })
    //     })

    // })

}