function loginForm(){
  //changing background image
  const content = document.getElementById('content')
  content.classList.add('login')

    const container=document.getElementById("container")
    container.innerHTML=""
    const form = document.createElement("form");
    form.innerHTML = `
    <h1 class="largeFont">Login</h1>
    <div id="status"><br></div>
    <input type="text" name="email" class="feedback-input" placeholder="Email" required>
    <input type="password" name="password" class="feedback-input" placeholder="Password" required>
  
    <input type="submit">
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
    
        console.log(data)
    
        
        axios.post(`/api/sessions`, data).then(() => {
            console.log("do this")
            console.log("succes")
            createNav()
            viewAllDogs()
        }).catch(err=>{

          document.getElementById('status').textContent=err.response.data.message

    
        });
    
        // axios.post('/api/challenges', data)
      });


      container.append(form)

}