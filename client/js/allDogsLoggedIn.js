

// function to view all dogs when logged in

function loggedInAllDogs(dog, favs, allDogsContainer, favAlertContainer, favAlertText){
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
                    dogHeader.after(favourites)
                    if (favs.length >= 1) {
                        favs.forEach(fav => {
                            if (fav.dog_id === dog.id) {
                                favourites.innerHTML = `<i class="fas fa-star fa-lg"></i>`
                            }
                        })

                    }

                    dogHeader.addEventListener('click', event => {
                        console.log(dog.id)
                        dogById(dog.id)
                    })                   



                    //allow user to add to their favourites
                    favourites.addEventListener('click', e => {

                        if (favourites.innerHTML === `<i class="fas fa-star fa-lg"></i>`) {
                            axios.delete(`api/pets/favourites/${dog.id}`).then((response) => {
                                favourites.innerHTML = `<i class="far fa-star fa-lg"></i>`
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
}