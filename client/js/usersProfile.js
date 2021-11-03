function getUserProfile(userdata) {
    const container = document.getElementById("container");
    container.innerHTML = "";
  
      const name = userdata.name;
      const email = userdata.email;
      const state = userdata.state_code;
      const fact = userdata.fact;
  
      container.innerHTML = `
      <div class="blockWrapper">
          <div class="block">
          
          <div class="menu-bar">
             <div class="profile-button" id="profile-page">Profile</div>
            <div class="sub-menu">
            <div class="profile-button" id="userDogs">Their Dogs</div>
             </div>
          </div>
          <div class="view-bar" id="view-bar">
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
          </div>
          `;
  

  
      document.getElementById("userDogs").addEventListener("click", (e) => {
        getOtherUsersDog(userdata)
      });
  
      document.getElementById("profile-page").addEventListener("click", (e)=>{
        getUserProfile(userdata)
      })
  
  
    }
  
    
  
  