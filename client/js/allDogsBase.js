//Function that intialises the all dogs page

function viewAllDogs() {
    //changing background image
    const content = document.getElementById('content')
    content.classList.add('allDogsBackground')


    //accessing and clearing container
    const container = document.getElementById('container')
    container.innerHTML = ''

    //creating the filters container
    const filterContainer = document.createElement('div')
    filterContainer.classList.add('filterContainer')
    filterContainer.innerHTML = `

    
    <select name="breed" id="breedFilter" class="filter-dropdown">
        <option value="">Breed</option>      
    </select>

    <select name="age" id="ageFilter" class="filter-dropdown">
      <option value="">Age</option>
      <option value="Puppy">Puppy</option>
      <option value="Adult">Adult</option>
      <option value="Senior">Senior</option>
    </select>
    

    
    <select name="gender" id="genderFilter" class="filter-dropdown">
      <option value="">Gender</option>
      <option value="Male">Male</option>
      <option value="Senior">Female</option>
      </select>

    <select name="state_code" id="dogStateFilter" class="filter-dropdown">
      <option value="">State</option>
      <option value="NSW">NSW</option>
      <option value="QLD">QLD</option>
      <option value="SA">SA</option>
      <option value="TAS">TAS</option>
      <option value="VIC">VIC</option>
      <option value="WA">WA</option>
      </select>
      
    
    `

    container.append(filterContainer)
    const breed = document.getElementById('breedFilter')
    populateBreed(breed)
    const age = document.getElementById('ageFilter')
    const gender = document.getElementById('genderFilter')
    const state_code = document.getElementById('dogStateFilter')

    //Creating the results message based on the filters
    const filterStatusContainer = document.createElement('div')
    filterStatusContainer.classList.add('filterStatusContainer')
    const filterStatus = document.createElement('h3')
    filterStatus.classList.add('filterStatus')
    filterContainer.after(filterStatusContainer)
    filterStatusContainer.append(filterStatus)

    //creating the favourites alert message
    const favAlertContainer = document.createElement('div')
    favAlertContainer.classList.add('favAlertContainer')
    const favAlertText = document.createElement('h3')
    favAlertContainer.append(favAlertText)

    //creating the dog list grid and appending it to the container
    const allDogsWrapper = document.createElement('div')
    allDogsWrapper.classList.add('allDogsWrapper')
    const allDogsContainer = document.createElement('div')
    allDogsContainer.classList.add('allDogs')
    container.append(allDogsWrapper)
    allDogsWrapper.append(allDogsContainer)




    //checking if user is logged in
    axios.get(`/api/sessions`).then((response) => {
        console.log('user logged in')
        //since user is logged in proceed to access their favourites
        axios.get("api/pets/favourites").then((response) => {
            console.log('retrived favourites')
            favs = response.data

            //access all dog posts
            axios.get("/api/pets").then((response) => {
                dogs = response.data

                //Show all dogs first
                dogs.forEach(dog => {
                //feeding favouties data onto each dog post
                    loggedInAllDogs(dog, favs, allDogsContainer, favAlertContainer, favAlertText)

                })

                //drop down filter for age
                filterEvent(age, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

                //drop down filter for breed
                filterEvent(breed, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

                //drop down filter for gender
                filterEvent(gender, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

                //drop down filter for gender
                filterEvent(state_code, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)



            }).catch((err) => {
                console.log(err)
                console.log('Error retriving all dogs')


            })


        }).catch((err) => {
            console.log(err)
            console.log('Error retriving favourites')


        })



    }).catch((err) => {
        //user is not logged in
        console.log('user NOT logged in')
        //access all dog posts
        axios.get("/api/pets").then((response) => {
            dogs = response.data

            //Show all dogs first
            dogs.forEach(dog => {
                //feeding favouties data onto each dog post
                guestAllDogs(dog, allDogsContainer, favAlertContainer, favAlertText)

            })

            //drop down filter for age
            filterEvent(age, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

            //drop down filter for breed
            filterEvent(breed, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

            //drop down filter for gender
            filterEvent(gender, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)

            //drop down filter for gender
            filterEvent(state_code, age, breed, gender, state_code, dogs, allDogsContainer, favAlertContainer, favAlertText)


        })

    })

}


function urlFormat(url) {

    const formattedUrl = []

    for (link of url) {

        link = link.replace('}', '').replace('{', '');
        formattedUrl.push(link)

    }

    return formattedUrl

}
