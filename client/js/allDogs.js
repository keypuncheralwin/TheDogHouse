function viewAllDogs() {
    //changing background image
    const content = document.getElementById('content')
    content.classList.add('allDogsBackground')
    

    //accessing and clearing container
    const container = document.getElementById('container')
    container.innerHTML = ''

    //creating the favourites alert message
    const favAlertContainer = document.createElement('div')
    favAlertContainer.classList.add('favAlertContainer')
    const favAlertText = document.createElement('h3')
    favAlertContainer.append(favAlertText)

    //creating the dog list grid and appending it to the container
    const allDogsContainer = document.createElement('div')
    allDogsContainer.classList.add('allDogs')
    container.append(allDogsContainer)

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

                //create grid based on each dog post
                dogs.forEach(dog => {
                    const dogImage = document.createElement('img')
                    dogImage.classList.add('dogImage')
                    const urlArray = dog.image.split(',')
                    urlFormat(urlArray)[0]


                    const singleDog = document.createElement('div')
                    singleDog.classList.add('singleDog')
                    singleDog.innerHTML = `<img id="dogCoverPhoto" src=${urlFormat(urlArray)[0]} alt="photo of dog">`
                    allDogsContainer.append(singleDog)

                    const dogHeader = document.createElement('div') //made to contain the header and price
                    dogHeader.classList.add('dogHeader')
                    singleDog.append(dogHeader)


                    const dogName = document.createElement('h2')
                    dogName.classList.add('dogName')
                    dogName.textContent = dog.name
                    dogHeader.append(dogName)

                    const dogPrice = document.createElement('h2')
                    dogPrice.classList.add('dogPrice')
                    dogPrice.textContent = '$' + dog.price
                    dogHeader.append(dogPrice)

                    const favourites = document.createElement('div')
                    favourites.classList.add('fav')
                    favourites.innerHTML = `<i class="far fa-star fa-lg"></i>`
                    dogHeader.append(favourites)
                    if (favs.length >= 1) {
                        favs.forEach(fav => {
                            if (fav.dog_id === dog.id) {
                                favourites.innerHTML = `<i class="fas fa-star fa-lg"></i>`
                            }
                        })

                    }



                    //allow user to add to their favourites
                    favourites.addEventListener('click', e => {

                        if (favourites.innerHTML === `<i class="fas fa-star fa-lg"></i>`) {
                            axios.delete(`api/pets/favourites`).then((response) => {
                                favourites.innerHTML = ''
                                favourites.innerHTML = `<i class="fa fa-star fa-lg"></i>`
                                favAlertText.textContent = "Removed from your favourites!"
                                dogHeader.before(favAlertContainer)
                                setTimeout(function () {
                                    favAlertContainer.remove();
                                }, 1000);
                            }).catch((err) => {
                                favAlertText.textContent = "Error removing from favourites!"
                                dogHeader.before(favAlertContainer)

                            })

                        } else {
                            axios.post(`api/pets/favourites/${dog.id}`).then((response) => {
                                favourites.innerHTML = `<i class="fas fa-star fa-lg"></i>`
                                favAlertText.textContent = "Added to your favourites!"
                                dogHeader.before(favAlertContainer)
                                setTimeout(function () {
                                    favAlertContainer.remove();
                                }, 1000);
                            }).catch((err) => {
                                favAlertText.textContent = "Error adding to your favourites!"
                                dogHeader.before(favAlertContainer)

                            })
                        }


                    })



                })



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

            //create grid based on each dog post
            dogs.forEach(dog => {
                const dogImage = document.createElement('img')
                dogImage.classList.add('dogImage')
                const urlArray = dog.image.split(',')
                urlFormat(urlArray)[0]


                const singleDog = document.createElement('div')
                singleDog.classList.add('singleDog')
                singleDog.innerHTML = `<img id="dogCoverPhoto" src=${urlFormat(urlArray)[0]} alt="photo of dog">`
                allDogsContainer.append(singleDog)

                const dogHeader = document.createElement('div') //made to contain the header and price
                dogHeader.classList.add('dogHeader')
                singleDog.append(dogHeader)


                const dogName = document.createElement('h2')
                dogName.classList.add('dogName')
                dogName.textContent = dog.name
                dogHeader.append(dogName)

                const dogPrice = document.createElement('h2')
                dogPrice.classList.add('dogPrice')
                dogPrice.textContent = '$' + dog.price
                dogHeader.append(dogPrice)

                const favourites = document.createElement('div')
                favourites.classList.add('fav')
                favourites.innerHTML = `<i class="far fa-star fa-lg"></i>`
                dogHeader.append(favourites)



                //allow user to add to their favourites
                favourites.addEventListener('click', e => {

                    favAlertText.textContent = "Login to add this to your favourites"
                    dogHeader.before(favAlertContainer)
                    setTimeout(function () {
                        favAlertContainer.remove();
                    }, 1000);

                })



            }).catch((err) => {
                console.log(err)
                console.log('Error retriving all dogs')




            })



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