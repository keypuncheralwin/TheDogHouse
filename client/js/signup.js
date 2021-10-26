function signUpForm(){
  const container =document.getElementById("container")
  container.innerHTML="";
  const form = document.createElement("form");
  form.innerHTML = `
  <fieldset>
  <p id='error'></p>
    <label for="name">Name</label><br>
    <input type="text" name="name">
  </fieldset>
  <fieldset>
  <label for="email">Email</label><br>
  <input type="text" name="email">
</fieldset>
<fieldset>
  <label for="state_code">State</label><br>
  <input type="text" name="state_code">
</fieldset>
<fieldset>
  <label for="fact">Tell us a funny dog joke</label><br>
  <input type="text" name="fact">
</fieldset>
  <fieldset>
    <label for="password">password</label><br>
    <input type="password" name="password">
  </fieldset>
  <input type="submit">
  `;


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // const data = {name: "Katie"}
    const formData = new FormData(form);
    console.log(formData);
    challengeName = formData.get("name");
    state= formData.get("state_code");
    console.log(state)

    console.log(challengeName)
    const data = Object.fromEntries(formData.entries())

    console.log(data)

    
    axios.post(`/api/user`, data).then(() => {
        console.log("do this")
        console.log("succes")
    }).catch(err=>{
        document.getElementById('error').textContent=err.response.data.message

    });

    // axios.post('/api/challenges', data)
  });

  container.append(form)
}