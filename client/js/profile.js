function getProfilePage() {
  div = document.createElement("div");
  

  viewBar=document.getElementById("view-bar")
  viewBar.innerHTML="";

  axios.get(`/api/sessions`).then((response) => {
    console.log(response.data);

    const name = response.data[0].name;
    const email = response.data[0].email;
    const state = response.data[0].state_code;
    const fact = response.data[0].fact;

    div.innerHTML= `
    <div class="profileContainer">
    <p class="profile-label">Name</p>
    <p class="profile-value">${name}</p>
    <p class="profile-label">Email</p>
    <p class="profile-value">${email}</p>
    <p class="profile-label">State</p>
    <p class="profile-value">${state}</p>
    <p class="profile-label">Your Favourite Breed</p>
    <p class="profile-value">${fact}</p>
    </div>
    
    `

    viewBar.append(div)
  });
}
