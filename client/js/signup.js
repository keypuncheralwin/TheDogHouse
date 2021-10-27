function signUpForm(){

  const container =document.getElementById("container")
  container.innerHTML="";
  const form = document.createElement("form");
  form.innerHTML = `
  <h1 class="largeFont">Let's get you signed up!</h1>
  <div id="status"><br></div>
    <input type="text" name="name" class="feedback-input" placeholder="Full Name" required>  
  <input type="text" name="email" class="feedback-input" placeholder="Email" required>
  <select name="state_code" id="state_code" class="feedback-input" required>
      <option value="">Select State</option>
      <option value="NSW">NSW</option>
      <option value="QLD">QLD</option>
      <option value="SA">SA</option>
      <option value="TAS">TAS</option>
      <option value="VIC">VIC</option>
      <option value="WA">WA</option>
      </select>
  <select name="fact" id="fact" class="feedback-input" required>
  <option value="">Select your favourite dog breed</option>      
  </select>
  <input type="password" name="password" class="feedback-input" placeholder="Enter a password" required>
  <input type="password" name="passwordConfirm" class="feedback-input" placeholder="Confirm you password" required>
  
  <input type="submit">
  `;

  

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // const data = {name: "Katie"}
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())

    console.log(data)

    
    axios.post(`/api/user`, data).then(() => {
        console.log("do this")
        console.log("succes")
    }).catch(err=>{
        document.getElementById('status').textContent=err.response.data.message

    });

  });

  container.append(form)
  const fact = document.getElementById('fact')
  populateBreed(fact)
}