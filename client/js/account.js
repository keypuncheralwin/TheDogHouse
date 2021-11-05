function accountForm() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  axios.get(`/api/sessions`).then((response) => {
    console.log(response.data);

    const name = response.data[0].name;
    const email = response.data[0].email;
    const state = response.data[0].state_code;
    const fact = response.data[0].fact;

    container.innerHTML = `
    <div class="blockWrapper">
        <div class="block">
        
        <div class="menu-bar">
          <div class="sub-menu">
          <div class="profile-button" id="profile-page">Profile</div>
          <div class="profile-button" id="favourite-dog">Favorites</div>
          </div>
          <div class="sub-menu">
          <div class="profile-button" id="add-dog">Add Listing</div>
          <div class="profile-button" id="userDogs">Your Dogs</div>
          </div>
          <div class="sub-menu">
          <div id="messagesButton" class="profile-button">Messages</div>
          <div id="log-out" class="profile-button">Log out</div>
          </div>
        </div>
        <div class="view-bar" id="view-bar">

        <div class="profile-container">
        <div class="profileSubContainer">
        <p class="profile-image-container"><i class="fas fa-id-card-alt"></i></p>
        </div>
        <div class="profileSubContainer">
        <p class="profile-value-main">${name} | ${state}</p>
        </div>
        <div class="profileSubContainer">
        <p class="profile-value-not-main">${email}</p>
        </div>
        <div class="profileSubContainer">
        <p class="profile-value-not-main">Your Favourite Breed: ${fact}</p>
        </div>
        <div id="edit-info"><a>Edit</a></div>
        </div>
     
        </div>
        </div>
        </div>
        `;

        document.getElementById("edit-info").addEventListener("click", (e) => {
          editUserInformation(response.data)
        });

    document.getElementById("add-dog").addEventListener("click", (e) => {
      addPetForm();
    });

    document.getElementById("log-out").addEventListener("click", () => {
      axios.delete(`/api/sessions`).then((response) => {
        console.log(response.data);
        viewAllDogs();

        createNav();
      });
    });

    document.getElementById("userDogs").addEventListener("click", (e) => {
      getUsersDog();
    });

    document.getElementById("favourite-dog").addEventListener("click", (e)=>{
      getFaveDogs();
    })

    document.getElementById("profile-page").addEventListener("click", (e)=>{
      getProfilePage()
    })

    document.getElementById("messagesButton").addEventListener("click", (e)=>{
      getAllMessages()
    })


  });

  
}

