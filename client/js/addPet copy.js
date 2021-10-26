function addPetForm() {
    const content = document.getElementById('content')
    const addPet = document.createElement("div");
    addPet.classList.add('card')
    addPet.innerHTML = `
    <div id="status"><br></div>      

        <label for="name">Name</label>
        <input type="text" name="name" required>

        
        <select name="breed" id="breed" required>
        <option value="">Please select a breed</option>
        
        </select>

        
        <select name="age" id="age" required>
        <option value="">Select Age</option>
        <option value="Puppy">Puppy</option>
        <option value="Adult">Adult</option>
        <option value="Senior">Senior</option>
        </select>
        
        
        <select name="gender" id="gender" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Senior">Female</option>
        </select>

      
        <label for="color">Color</label>
        <input type="text" name="color" required>

        
        <div id="drag-drop-area"></div>
      
        <label for="description">Tell us a bit about your dog</label>
        <textarea name="description" rows="4" cols="50" required></textarea>     
        
      
      <input type="submit">
      
      `;
    content.append(addPet)
    const imageUrls = []
    uploadUppy(imageUrls)
    const breedSelection = document.getElementById('breed')
    populateBreed(breedSelection)
    addPet.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(addPet)
        console.log(formData)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        const status = document.getElementById('status')
        console.log(imageUrls)

        // axios.post('/api/challenges', data).then(() => {
        //     renderHomePage()
        // }).catch(err => {
        //     status.textContent = err.response.data.message
        // })

    })
}

