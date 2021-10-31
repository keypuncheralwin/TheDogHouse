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
                console.log(favs)
    
                //access all dog posts
                axios.get(`/api/pets/${dogId}`).then((response) => {
                    dog = response.data[0]
                    console.log(dog)

                const dogName = document.createElement('h2')
                dogName.classList.add('singleDogName')
                dogName.textContent = dog.name
                singleDogHeader.append(dogName)

                const dogPrice = document.createElement('h2')
                dogPrice.classList.add('singleDogPrice')
                dogPrice.textContent = '$' + dog.price
                singleDogHeader.append(dogPrice)

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
                    // swiperSlide.innerHTML = `Test`
                    swiperSlide.innerHTML = `<img class="imgInGallery" src=${url}>`
                    swiperWrapper.append(swiperSlide)
                                 
                }

                const swiperPagination = document.createElement('div')
                swiperPagination.classList.add('swiper-pagination')
                swiper.append(swiperPagination)

                // const swiperPrevButton = document.createElement('div')
                // swiperPrevButton.classList.add('swiper-button-prev')
                // swiper.append(swiperPrevButton)

                // const swiperNextButton = document.createElement('div')
                // swiperNextButton.classList.add('swiper-button-next')
                // swiper.append(swiperNextButton)

                // const swiperScroll = document.createElement('div')
                // swiperScroll.classList.add('swiper-scrollbar')
                // swiper.append(swiperScroll)
                imgGallery()

    
    
                    
    
    
    
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