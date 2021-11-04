function addPetForm() {
  
  const container = document.getElementById('container')
  container.innerHTML = "";
  const addPet = document.createElement("form");
  addPet.innerHTML = `
  <h1 class="largeFont">Let's find your dog a loving home!</h1>
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
      <option value="Female">Female</option>
      </select>
      </div>

      <div class="alignCurrency"> 
      <input type="text" name="currency" id="currency" value="$" size="1" readonly>
      <input type="number" id="price" class="feedback-input" name="price" placeholder="00.00" step="0.10" min="0" max="100000">
      </div>

      <select name="state_code" id="state_code_dog" class="feedback-input" required>
      <option value="">Select State</option>
      <option value="NSW">NSW</option>
      <option value="QLD">QLD</option>
      <option value="SA">SA</option>
      <option value="TAS">TAS</option>
      <option value="VIC">VIC</option>
      <option value="WA">WA</option>
      </select>
      
  
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
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const status = document.getElementById('status')
    console.log(imageUrls)
    

    if (imageUrls.length >= 1) {
      data['imageUrls'] = imageUrls
      axios.post('/api/pets/add', data).then(() => {
        console.log('dog added to database')
        viewAllDogs()
        
      }).catch(err => {
        status.textContent = err.response.data.message
      })
    } else{
      status.textContent = `Please add at least one photo of ${data.name}`
    }



  })
}