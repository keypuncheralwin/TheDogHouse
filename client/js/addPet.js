function addPetForm() {
  const content = document.getElementById('content')
  content.classList.add('addPetBackground')
  const container = document.getElementById('container')
  const addPet = document.createElement("form");
  addPet.innerHTML = `
  <h2 id="addDogHeader" >Let's find your dog a loving home!</h2>
  <div id="status"><br></div> 
  <div class="align">
  <input id="name" name="name" type="text" class="feedback-input" placeholder="Name" />   
  <select name="breed" id="breed" class="feedback-input" required>
  <option value="">Please select a breed</option>      
  </select>
  </div>
  <div class="align"> 
  <select id="age" name="age" id="age" class="feedback-input" required>
      <option value="">Select Age</option>
      <option value="Puppy">Puppy</option>
      <option value="Adult">Adult</option>
      <option value="Senior">Senior</option>
      </select>
      
  <select name="gender" id="gender" class="feedback-input" required>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Senior">Female</option>
      </select>
      </div>
  <div id="drag-drop-area"></div>
  <textarea name="description" class="feedback-input" placeholder="description" required></textarea>  
      
    
      <input type="submit" value="SUBMIT"/> 
    
    `;
    container.append(addPet)
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

