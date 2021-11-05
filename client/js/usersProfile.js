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
        <div class="sub-menu">
        <div class="profile-button" id="profile-page-user">Profile</div>
        <div class="profile-button" id="user-dogs">Their Dogs</div>
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
      <p class="profile-value-not-main">Their Favourite Breed: ${fact}</p>
      </div>
      </div>
   
      </div>
      </div>
      </div>
          `;
  

  
      document.getElementById("user-dogs").addEventListener("click", (e) => {
        getOtherUsersDog(userdata)
      });
  
      document.getElementById("profile-page-user").addEventListener("click", (e)=>{
        getUserProfile(userdata)
      })
  
  
    }
  
    
  
  