function editDogById(dogId){

    console.log(dogId)
    const container = document.getElementById('container')
    container.innerHTML = ''

    const editDogContainer = document.createElement('div')
    editDogContainer.classList.add('editDogContainer')
    container.append(editDogContainer)


        //checking if user is logged in
        axios.get(`/api/sessions`).then((response) => {
            console.log('user logged in')
           
    
                //access dog post
                axios.get(`/api/pets/${dogId}`).then((response) => {
                    dog = response.data[0]
                    console.log(dog)

                    const editPet = document.createElement("form");
  editPet.innerHTML = `
  
  <h1 class="largeFont">Let's make changes to your dog listing</h1>
  <div id="status"><br></div> 
  <div class="align">
  <input id="name" name="name" type="text" class="feedback-input" value=${dog.name}>   
  <select name="breed" id="breed" class="feedback-input" required>
  <option value=${dog.breed}>${dog.breed}</option>      
  </select>
  </div>
  <div class="align"> 
  <select id="age" name="age" id="age" class="feedback-input" required>
      <option value=${dog.age}>${dog.age}</option>
      <option value="Puppy">Puppy</option>
      <option value="Adult">Adult</option>
      <option value="Senior">Senior</option>
      </select>
      
  <select name="gender" id="gender" class="feedback-input" required>
      <option value="${dog.gender}">${dog.gender}</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      </select>
      </div>

      <div class="alignCurrency"> 
      <input type="text" name="currency" id="currency" value="$" size="1" readonly>
      <input type="number" id="price" class="feedback-input" name="price" placeholder="00.00" step="0.10" min="0" max="100000" value="${dog.price}">
      </div>

      <select name="state_code" id="state_code_dog" class="feedback-input" required>
      <option value="${dog.state_code}">${dog.state_code}</option>
      <option value="NSW">NSW</option>
      <option value="QLD">QLD</option>
      <option value="SA">SA</option>
      <option value="TAS">TAS</option>
      <option value="VIC">VIC</option>
      <option value="WA">WA</option>
      </select>
      
  <div id="editDogImagesWrapper"><div id="editDogImagesContainer"></div></div>
  <div id="drag-drop-area-edit"></div>
  <textarea name="description" class="feedback-input" placeholder="description" required>${dog.description}</textarea>  
      
  <input type="submit" value="UPDATE"/> 

  <div id="deleteWrapper">
  <div id="deleteContainer">
  <div id="deleteIcon"><i class="fas fa-trash"></i></div>
  <div class="deleteText">Delete this Listing</div>
  </div>
  </div>
    
    `;

    editDogContainer.append(editPet)
    const editDogImagesContainer = document.getElementById('editDogImagesContainer')                
    const urlArray = dog.image.split(',')
    const formattedUrl = urlFormat(urlArray)
    const tempImageUrls = [] //for temporarily storing all image Urls retrived from database
    for (url of formattedUrl){
        tempImageUrls.push(url) //pushing all images into to temp array
        const editDogImages = document.createElement('div')
        editDogImages.classList.add('editDogImages')
        editDogImages.innerHTML = `<img class="editImg" src=${url}>`
        editDogImagesContainer.append(editDogImages)
        const deleteImg = document.createElement('div')
        deleteImg.classList.add('deleteImg')
        deleteImg.innerHTML = `<i class="fas fa-trash"></i>`
        editDogImages.append(deleteImg)

        deleteImg.addEventListener('click', e => {
            //removing the deleted image from list of urls
            
            const position = tempImageUrls.indexOf(url) 
            tempImageUrls.splice(position,1)
            deleteImg.remove()
            editDogImages.remove()
            console.log(tempImageUrls)
        })
                     
    }
    console.log(tempImageUrls)

    const imageUrls = []
    uploadUppyEdit(imageUrls) //returns an array of the uploaded image urls
    const breedSelection = document.getElementById('breed')
    populateBreed(breedSelection)

    editPet.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(editPet)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        const status = document.getElementById('status')
        
        //removing all the extra quotation marks from url
        tempImageUrls.forEach(url => {
            const plainUrl = url.replace(/['"]+/g, '');
            imageUrls.push(plainUrl)
        })
        
        
        console.log(imageUrls)
        if (imageUrls.length >= 1) {
          data['imageUrls'] = imageUrls
          data['id'] = dogId
          axios.put('/api/pets/user/dog/edit', data).then(() => {
            console.log('dog added to database')
            
          }).catch(err => {
            status.textContent = err.response.data.message
          })
        } else{
            editDogContainer.scrollIntoView()
            status.textContent = `Please add at least one photo of ${data.name}`
        }
    
    
    
      })

    
    
                    
    
    
    
                }).catch((err) => {
                    console.log(err)
                    console.log('Error retriving all dogs')
    
    
                })
    
    
    
        }).catch((err) => {
            //user is not logged in
            console.log('user NOT logged in')
            console.log("you must be logged in to edit your dog")
            
    
        })

}


    

      










