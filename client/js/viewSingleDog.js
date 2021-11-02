function dogById(dogId){

    console.log(dogId)
    const container = document.getElementById('container')
    container.innerHTML = ''

    const singleDogWrapper = document.createElement('div')
    singleDogWrapper.classList.add('singleDogWrapper')
    container.append(singleDogWrapper)

    const singleDogContainer = document.createElement('div')
    singleDogContainer.classList.add('singleDogContainer')
    singleDogWrapper.append(singleDogContainer)


    const singleDogImageContainer = document.createElement('div')
    singleDogImageContainer.classList.add('singleDogImageContainer')
    singleDogContainer.append(singleDogImageContainer)

    const singleDogHeader = document.createElement('div')
    singleDogHeader.classList.add('singleDogHeader')
    singleDogContainer.append(singleDogHeader)

    const contactPosterWraper = document.createElement('div')
    contactPosterWraper.classList.add('contactPosterWraper')
    singleDogContainer.append(contactPosterWraper)


        //checking if user is logged in
        axios.get(`/api/sessions`).then((response) => {
            console.log('user logged in')
            


            // axios.get(`api/pets/user/dogs/${dogId}`).then((res)=>{
            //     const userAndDog=res.data
            //     console.log(res.data)
            //     button=document.createElement('button')
            //     button.textContent="Message me!"
            //     container.append(button)
            //     button.addEventListener("click", (e)=>{getMessageProfile(userAndDog)})
            
            // })


    

            //since user is logged in proceed to access their favourites
            axios.get("api/pets/favourites/dogs").then((response) => {
                console.log('retrived favourites')
                favs = response.data
                console.log(favs)
    
                //access single dog post
                axios.get(`/api/pets/${dogId}`).then((response) => {
                    dog = response.data[0]
                    console.log(dog)

                    //access the user who posted the ad
                    axios.get(`/api/user/${dog.user_id}`).then((response) => {
                        dogPostUser = response.data[0]
                        console.log(dogPostUser)


                        viewDogPost(singleDogHeader, favs, dog, dogPostUser, singleDogImageContainer, contactPosterWraper, dogPostUser)

                        



            axios.get(`api/pets/user/dogs/${dogId}`).then((res)=>{
                const userAndDog=res.data
                console.log(res.data)
                button=document.createElement('button')
                button.textContent="Message me!"
                singleDogHeader.append(button)
                button.addEventListener("click", (e)=>{
                    getMessageProfile(userAndDog)
                })
            
            }).catch(err=>console.log(err))

                const swiperPagination = document.createElement('div')
                swiperPagination.classList.add('swiper-pagination')
                swiper.append(swiperPagination)




                
                    }).catch((err) => {
                        console.log(err)
                        console.log("error retrieving user details")
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
            axios.get(`/api/pets/${dogId}`).then((response) => {
                dog = response.data[0]

                //since the user is not logged, we're not accesing the post's user details
                const dogPostUser = false 

                //since the user is not logged, we're leaving the favourite button empty
                const favs = false 

                viewDogPost(singleDogHeader, favs, dog, dogPostUser, singleDogImageContainer, contactPosterWraper, dogPostUser)
    
                
    
    
            }).catch((err) => {
                console.log(err)
                console.log('Error accessing dog post details')
    
    
            })
    
        })

      










}