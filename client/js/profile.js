function getProfilePage() {
  div = document.createElement("div");
  

  viewBar=document.getElementById("view-bar")
  viewBar.classList.remove("view-bar-user-dogs")
  viewBar.classList.add("view-bar")
  viewBar.innerHTML="";

  axios.get(`/api/sessions`).then((response) => {
    console.log(response.data);

    const name = response.data[0].name;
    const email = response.data[0].email;
    const state = response.data[0].state_code;
    const fact = response.data[0].fact;

    div.innerHTML= `

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
    
    `

    viewBar.append(div)

    document.getElementById("edit-info").addEventListener("click", (e) => {
      editUserInformation(response.data)
    });
  });
}
