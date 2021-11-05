

function checkFilters(age, breed, gender, state_code, dogs){
    
    if (age.value && breed.value && gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.age === age.value && e.breed === breed.value && e.gender === gender.value && e.state_code === state_code.value)
        return  filteredArray

    } else if (age.value && breed.value && gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.age === age.value && e.breed === breed.value && e.gender === gender.value)
        return  filteredArray

    } else if (age.value && breed.value && !gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.age === age.value && e.breed === breed.value)
        return  filteredArray

    } else if (age.value && !breed.value && !gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.age === age.value)
        return  filteredArray

    } else if (!age.value && breed.value && gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.breed === breed.value && e.gender === gender.value && e.state_code === state_code.value)
        return  filteredArray

    } else if (!age.value && !breed.value && gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.gender === gender.value && e.state_code === state_code.value)
        return  filteredArray

    } else if (!age.value && !breed.value && !gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.state_code === state_code.value)
        return  filteredArray

    } else if (!age.value && breed.value && !gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.state_code === state_code.value && e.breed === breed.value)
        return  filteredArray

    } else if (age.value && !breed.value && !gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.state_code === state_code.value && e.age === age.value)
        return  filteredArray

    } else if (!age.value && breed.value && !gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.breed === breed.value)
        return  filteredArray
    
    } else if (!age.value && breed.value && gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.breed === breed.value && e.gender === gender.value)
        return  filteredArray
    
    } else if (!age.value && !breed.value && gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.gender === gender.value)
        return  filteredArray
    
    } else if (age.value && !breed.value && gender.value && !state_code.value) {
        const filteredArray = dogs.filter(e => e.gender === gender.value && e.age === age.value)
        return  filteredArray
    
    } else if (age.value && !breed.value && gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.gender === gender.value && e.age === age.value && e.state_code === state_code.value)
        return  filteredArray
    
    } else if (age.value && breed.value && !gender.value && state_code.value) {
        const filteredArray = dogs.filter(e => e.age === age.value && e.breed === breed.value && e.state_code === state_code.value)
        return  filteredArray

    } else {
        return  dogs
    
    }
    


}


function priceFilters (minPrice, maxPrice, filteredArray){

    const minPriceNumber = Number(minPrice.value)
    const maxPriceNumber = Number(maxPrice.value)

    if (!minPrice.value && !maxPrice.value) {
        return  filteredArray

    } else if (!minPrice.value && maxPrice.value){
        const priceFilteredArray = filteredArray.filter(e => e.price <= maxPriceNumber)
        return priceFilteredArray

    } else if (minPrice.value && !maxPrice.value){
        const priceFilteredArray = filteredArray.filter(e => e.price >= minPriceNumber)
        return priceFilteredArray

    } else if (minPrice.value && maxPrice.value && minPriceNumber <= maxPriceNumber){
        const priceFilteredArray = filteredArray.filter(e => e.price >= minPriceNumber && e.price <= maxPriceNumber)
        return priceFilteredArray

    } else return  filteredArray

}

function nameFilter(dogName, priceFilteredArray){

    const dogNameLowCase = dogName.value.toLowerCase()

    if (dogName.value) {
        const finalFilteredArray = priceFilteredArray.filter(e => e.name.toLowerCase().includes(dogNameLowCase))
        return finalFilteredArray 

    } else return priceFilteredArray

}
