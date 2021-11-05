function editUserInformation(userInfo){
    console.log(userInfo)
    const name = userInfo[0].name;
    const email = userInfo[0].email;
    const state = userInfo[0].state_code;
    const user_fact = userInfo[0].fact;
    const id=userInfo[0].id
    
    const container =document.getElementById("container")
    container.innerHTML="";
    const form = document.createElement("form");
    form.innerHTML = `
    <h1 class="largeFont">Update Your Profile!</h1>
    <div id="status"><br></div>
    <label for="name">Full Name</label><br>
      <input type="text" name="name" class="feedback-input" value=${name} required>  
      <label for="email">Email</label><br>
    <input type="text" name="email" class="feedback-input" value=${email} required>
    <label for="state_code">State</label><br>
    <select name="state_code" id="state_code" class="feedback-input" required>
        <option value="">Select State</option>
        <option value="NSW">NSW</option>
        <option value="QLD">QLD</option>
        <option value="SA">SA</option>
        <option value="TAS">TAS</option>
        <option value="VIC">VIC</option>
        <option value="WA">WA</option>
        </select>
    <label for="fact">What's your Facourite dog breed?</label><br>
    <select name="fact" id="fact" class="feedback-input" required>
    <option value="">Select your favourite dog breed</option>      
    </select>
    <input type="text" name="id" value=${id} style="display:none;">
    <input type="submit" value="Update">
    `;
  
    
  
  form.addEventListener("submit", (event) => {
      event.preventDefault();
      // const data = {name: "Katie"}
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries())
  
      console.log(data)
  
      
      axios.post(`/api/user/editInfo`, data).then(() => {
          console.log("do this")
          console.log("succes")
          accountForm()
      }).catch(err=>{
          document.getElementById('status').textContent=err.response.data.message
  
      });
  
    });
  
    container.append(form)
    const fact = document.getElementById('fact')
    populateBreed(fact)

    document.getElementById('state_code').value=state
    document.getElementById('fact').value=user_fact

}