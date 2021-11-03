


function viewDogPost(singleDogHeader, favs, dog, dogPostUser, singleDogImageContainer, contactPosterWraper, dogPostUser){

    singleDogHeader.innerHTML = `
                
                <div id="singleDogTitle">
                <div id="singleDogFav"><i class="far fa-star fa-lg"></i></div>
                <div id="singleDogName">${dog.name}</div>
                <div id="singleDogPrice">$${dog.price}</div>
                </div>
                               
                
                <div class="singleDogInfo">
                <div id="singleDogBreed" class="rounded">Breed: ${dog.breed}</div>
                <div id="singleDogAge" class="rounded">Age: ${dog.age}</div>
                <div id="singleDogGender" class="rounded">Gender: ${dog.gender}</div>
                <div id="singleDogState" class="rounded">State: ${dog.state_code}</div>
                </div>
                

                <div id="favContainer">
                <textarea name="description" class="feedback-input" placeholder="description" readonly id="viewDescription">${dog.description}</textarea> 
                
                </div>               

                `

                //retriving img urls
                const urlArray = dog.image.split(',')
                const formattedUrl = urlFormat(urlArray)
                
                // creating the img gallery 
                const swiper = document.createElement('div')
                swiper.classList.add('swiper')
                singleDogImageContainer.append(swiper)

                const swiperWrapper = document.createElement('div')
                swiperWrapper.classList.add('swiper-wrapper')
                swiper.append(swiperWrapper)
                

                for (url of formattedUrl){
                    console.log(url)
                    const swiperSlide = document.createElement('div')
                    swiperSlide.classList.add('swiper-slide')
                    swiperSlide.innerHTML = `<img class="imgInGallery" src=${url}>`
                    swiperWrapper.append(swiperSlide)
                                 
                }

                
                const swiperPagination = document.createElement('div')
                swiperPagination.classList.add('swiper-pagination')
                swiper.append(swiperPagination)

                //calling the image gallery function to load swiper js
                imgGallery()

                //if the dog post user details have been accessed then we can show their details
                if (dogPostUser){

                contactPosterWraper.innerHTML = `

                <div class="contactPoster">
                <div id="posterId" class="rounded">Poster Id: ${dog.user_id}</div>
                <div id="posterName" class="rounded">Posted By: ${dogPostUser.name}</div>
                </div>
                <div class="contactPoster" id="contact-poster">
       
                </div>            
                `

                // const enquireButton = document.getElementById('enquireButton')
                // enquireButton.addEventListener('click', e =>{
                //     const subject = `enquiring about your lovely dog ${dog.name}`
                //     const emailBody = "Hey " + dogPostUser.name + ", I was hoping we could arrange a time for me to visit " + dog.name
                //     parent.location=`mailto:${dogPostUser.email}?subject=${subject}&body=${emailBody}`
                // })

                axios.get(`api/pets/dogs/poster/${dog.id}`).then((res)=>{
                    button=document.createElement('contact-poster')
                    button.setAttribute("id", "enquireButton")
                    div=document.getElementById("contact-poster")
                    button.textContent=`Enquire about ${dog.name}`
                    const userAndDog=res.data
                    console.log(res.data)
                    button.addEventListener("click", (e)=>{
                        getMessageProfile(userAndDog)
                    })
                    div.append(button)
                
                }).catch(err=>console.log(err))

                } else {

                    contactPosterWraper.innerHTML = `
                    <div class="contactPoster">
                    <div id="enquireButton">Login to Enquire about ${dog.name}</div> 
                    </div>            
                    `  
                    const enquireButton = document.getElementById('enquireButton')
                    enquireButton.addEventListener('click', e =>{
                        loginForm()
                })                  

                }

                
                const favourite = document.getElementById('singleDogFav')

                if (favs){

                if (favs.length >= 1) {
                    favs.forEach(fav => {
                        if (fav.dog_id === dog.id) {
                            favourite.innerHTML = `<i class="fas fa-star fa-lg"></i>`
                        }
                    })

                }

                }
                

                favourite.addEventListener('click', e => {

                    if (dogPostUser){
                        if (favourite.innerHTML === `<i class="fas fa-star fa-lg"></i>`) {
                            axios.delete(`api/pets/favourites/${dog.id}`).then((response) => {
                                favourite.innerHTML = `<div id="singleFavAlert"> Removed from your favourites!&nbsp;</div><i class="far fa-star fa-lg"></i>`
                                const singleFavAlert = document.getElementById('singleFavAlert')
                                setTimeout(function () {
                                    singleFavAlert.remove();
                                }, 1000);
                            }).catch((err) => {
                                console.log("Error removing from favourites!")
    
                            })
    
                        } else {
                            axios.post(`api/pets/favourites/${dog.id}`).then((response) => {
                                favourite.innerHTML = `<div id="singleFavAlert"> Added to your favourites!&nbsp;</div><i class="fas fa-star fa-lg"></i>`
                                const singleFavAlert = document.getElementById('singleFavAlert')
                                setTimeout(function () {
                                    singleFavAlert.remove();
                                }, 1000);
                            }).catch((err) => {
                                console.log("Error removing from favourites!")
    
                            })
                        }
                    } else{
                        favourite.innerHTML = `<div id="singleFavAlert"> Please login to add to your favourites!&nbsp;</div><i class="far fa-star fa-lg"></i>`
                        const singleFavAlert = document.getElementById('singleFavAlert')
                            setTimeout(function () {
                                singleFavAlert.remove();
                            }, 1000);
                    }

                    


                })


    
}



