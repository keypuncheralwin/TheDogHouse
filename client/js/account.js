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
    <h1 class="largeFont">Hey, ${name} how are you?</h1>
        <div class="block">
        
        <div class="menu-bar">
           <div class="profile-button" id="profile-page">Profile</div>
           <div class="profile-button">Favorites</div>
          <div class="profile-button" id="add-dog">Add a dog</div>
          <div class="profile-button" id="userDogs">Your Dogs</div>
           <div id="log-out" class="profile-button">Log out</div>
        </div>
        <div class="view-bar">
        <p class="profile-label">Name</p>
        <p class="profile-value">${name}</p>
        <p class="profile-label">Email</p>
        <p class="profile-value">${email}</p>
        <p class="profile-label">State</p>
        <p class="profile-value">${state}</p>
        <p class="profile-label">Your Favourite Breed</p>
        <p class="profile-value">${fact}</p>
     
        </div>
        </div>
        `;

    document.getElementById("add-dog").addEventListener("click", (e)=>{
        addPetForm()
    } )

    document.getElementById("log-out").addEventListener("click", () => {
      axios.delete(`/api/sessions`).then((response) => {
        console.log(response.data);

        createNav();
      });
    });

    document.getElementById("userDogs").getElementById("click",
    
    )
  
  });
}

// <table>
//            <tr>
//               <th>Name</td>
//               <td>Email</td>
//               <td>State</td>
//               <td>Fact</td>
//             </tr>
//             <tr>
//                <td>${name}</td>
//                <td>${email}</td>
//                 <td>${state}</td>
//                 <td>${fact}</td>
//              </tr>
//         </table>