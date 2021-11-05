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

    <div class="profileContainer">
    <div class="profileSubContainer">
    <button id="edit-info">Edit</button>
    <p class="profile-label">Name</p>
    <p class="profile-value">${name}</p>
    </div>
    <div class="profileSubContainer">
    <p class="profile-label">Email</p>
    <p class="profile-value">${email}</p>
    </div>
    <div class="profileSubContainer">
    <p class="profile-label">State</p>
    <p class="profile-value">${state}</p>
    </div>
    <div class="profileSubContainer">
    <p class="profile-label">Your Favourite Breed</p>
    <p class="profile-value">${fact}</p>
    </div>
    </div>
    
    `

    viewBar.append(div)

    document.getElementById("edit-info").addEventListener("click", (e) => {
      editUserInformation(response.data)
    });
  });
}
