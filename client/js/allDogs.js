function viewAllDogs(){

    
    const container = document.getElementById('container')
    container.innerHTML = ''
    const allDogsContainer = document.createElement('div')
    allDogsContainer.classList.add('allDogs')
    container.append(allDogsContainer)

    
    axios.get("/api/pets").then((response)=>{
        dogs = response.data
        

        dogs.forEach(dog => {
            
            const dogImage = document.createElement('img')
            dogImage.classList.add('dogImage')
            const urlArray = dog.image.split(',')
            // console.log(urlArray)
            // console.log(urlArray[0].replace('{', ''))
            urlFormat(urlArray)[0]
            

            const singleDog = document.createElement('div')
            singleDog.classList.add('singleDog')
            singleDog.innerHTML = `<img id="dogCoverPhoto" src=${urlFormat(urlArray)[0]} alt="photo of dog">`
            allDogsContainer.append(singleDog)

            const dogHeader = document.createElement('div') //made to contain the header and price
            dogHeader.classList.add('dogHeader')
            singleDog.append(dogHeader)

            const favourites = document.createElement('div')
            

            const dogName = document.createElement('h2')
            dogName.classList.add('dogName')
            dogName.textContent = dog.name
            dogHeader.append(dogName)

            const dogPrice = document.createElement('h2')
            dogPrice.classList.add('dogPrice')
            dogPrice.textContent = '$' + dog.price
            dogHeader.append(dogPrice)

            // const dogBreed = document.createElement('div')
            // dogBreed.classList.add('dogBreed')
            // dogBreed.textContent = dog.breed
            // singleDog.append(dogBreed)

            // const dogAge = document.createElement('div')
            // dogAge.classList.add('dogAge')
            // dogAge.textContent = dog.age
            // singleDog.append(dogAge)

            // const dogGender = document.createElement('div')
            // dogGender.classList.add('dogAge')
            // dogGender.textContent = dog.gender
            // singleDog.append(dogGender)

            // const dogStateCode = document.createElement('div')
            // dogStateCode.classList.add('dogStateCode')
            // dogStateCode.textContent = dog.state_code
            // singleDog.append(dogStateCode)

            

            // const dogDescription = document.createElement('div')
            // dogDescription.classList.add('dogDescription')
            // dogDescription.textContent = dog.description
            // singleDog.append(dogDescription)

            





            
        });

    })











}

function urlFormat(url){

    const formattedUrl = []
    
    for (link of url){

        link = link.replace('}', '').replace('{', '').replace(/\\\//g, "");
        formattedUrl.push(link)
        
    }

    return formattedUrl

}