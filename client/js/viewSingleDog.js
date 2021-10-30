function dogById(dogId){

    console.log(dogId)
    const container = document.getElementById('container')
    container.innerHTML = ''

    const singleDogContainer = document.createElement('div')
    singleDogContainer.classList.add('singleDogContainer')
    container.append(singleDogContainer)

    const singleDogHeader = document.createElement('div')
    singleDogHeader.classList.add('singleDogHeader')
    singleDogContainer.append(singleDogHeader)

    const singleDogImageContainer = document.createElement('div')
    singleDogImageContainer.classList.add('singleDogImageContainer')
    singleDogContainer.append(singleDogImageContainer)

    const singleDogDescription = document.createElement('div')
    singleDogDescription.classList.add('singleDogDescription')
    singleDogContainer.append(singleDogDescription)

        //checking if user is logged in
        axios.get(`/api/sessions`).then((response) => {
            console.log('user logged in')

            //since user is logged in proceed to access their favourites
            axios.get("api/pets/favourites/dogs").then((response) => {
                console.log('retrived favourites')
                favs = response.data
    
                //access all dog posts
                axios.get("/api/pets").then((response) => {
                    dogs = response.data
    
    
                    
    
    
    
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
    
                
    
    
            })
    
        })











}