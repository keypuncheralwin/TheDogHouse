function addPetForm() {
    const content = document.getElementById('content')
    const addPet = document.createElement("form");
    addPet.innerHTML = `
    <div id="status"><br></div>
      <fieldset>
        <legend>Let's find your dog a loving home!</legend>

        <label for="name">Name</label><br>
        <input type="text" name="name"><br>

        <br>
        <select name="breed" id="breed">
        <option value="default">Please select a breed</option>
        
        </select><br>

        <br>
        <select name="age" id="age">
        <option value="default">How old is you dog?</option>
        <option value="puppy">Puppy</option>
        <option value="adult">Adult</option>
        <option value="senior">Senior</option>
        </select><br>

        <label for="gender">Gender</label><br>
        <input type="text" name="gender"><br>

        <label for="color">Color</label><br>
        <input type="text" name="color"><br>

        <div id="drag-drop-area"></div><br>
      
        <label for="description">Tell us a bit about your dog</label><br>
        <textarea name="description" rows="4" cols="50"></textarea><br>     
        
      
      <input type="submit">
      </fieldset>
      `;
    content.append(addPet)
    uploadUppy()
    const breedSelection = document.getElementById('breed')
    populateBreed(breedSelection)
    // form.addEventListener("submit", (event) => {
    //     event.preventDefault()
    //     const formData = new FormData(form)
    //     console.log(formData)
    //     const data = Object.fromEntries(formData.entries())
    //     console.log(data)
    //     const status = document.getElementById('status')

    //     axios.post('/api/challenges', data).then(() => {
    //         renderHomePage()
    //     }).catch(err => {
    //         status.textContent = err.response.data.message
    //     })

    // })
}