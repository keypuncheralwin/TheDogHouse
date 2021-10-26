function loginForm(){
    const container=document.getElementById("container")
    container.innerHTML=""
    const form = document.createElement("form");
    form.innerHTML = `
    <fieldset>
    <p id='error'></p>
      <label for="email">Email</label><br>
      <input type="text" name="email">
    </fieldset>
    <fieldset>
    <label for="password">Password</label><br>
    <input type="password" name="password">
  </fieldset>
    <input type="submit">
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // const data = {name: "Katie"}
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
    
        console.log(data)
    
        
        axios.post(`/api/sessions`, data).then(() => {
            console.log("do this")
            console.log("succes")
        }).catch(err=>{
            console.log(err)
    
        });
    
        // axios.post('/api/challenges', data)
      });

    container.append(form)

}