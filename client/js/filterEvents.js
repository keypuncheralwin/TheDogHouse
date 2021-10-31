

function filterEvent(element, filter1, filter2, filter3, filter4, filter5, filter6, filter7, dogs, allDogsContainer, favAlertContainer, favAlertText){


    element.addEventListener(`change`, e => {
        allDogsContainer.innerHTML = ''

        
        

        //checking which filters are active and retriving an array of objects that match the current filters
        const filteredArray = checkFilters(filter1, filter2, filter3, filter4, dogs)

        //checking the price filters
        const priceFilteredArray = priceFilters(filter5, filter6, filteredArray)

        //checking the name filter
        const finalFilteredArray = nameFilter(filter7, priceFilteredArray)


        //Creating the results message based on the filters
        const filterContainer = document.querySelector('.filterContainer')
        const filterStatusContainer = document.querySelector('.filterStatusContainer')
        const filterStatus = document.querySelector('.filterStatus')

        if (finalFilteredArray.length === 0){
            console.log('no results')

            filterStatus.textContent = ''
            filterStatus.textContent = 'No Results for those filters'
            

        } else{

            filterStatus.textContent = ''
            filterStatus.textContent = 'Showing you '+ finalFilteredArray.length + ' Result(s)'

            finalFilteredArray.forEach(dog => {
                guestAllDogs(dog, allDogsContainer, favAlertContainer, favAlertText)
            })

        }

        

    })
}


//non function method (old)

// breed.addEventListener('change', e => {
//     allDogsContainer.innerHTML = ''

//     console.log(breed.value, gender.value, state_code.value)

//     const filteredArray = checkFilters(age, breed, gender, state_code, dogs)

//     filteredArray.forEach(dog => {
//         guestAllDogs(dog, allDogsContainer, favAlertContainer, favAlertText)
//     })

// })
