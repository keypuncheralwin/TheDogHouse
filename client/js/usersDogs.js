
function getUsersDog() {
  axios.get("api/pets/user/dogs").then((res) => {
    const dogs = res.data
    const viewBar = document.getElementById("view-bar");
    console.log(viewBar)
    viewBar.classList.remove("view-bar")
    viewBar.classList.add("view-bar-user-dogs")

    viewBar.innerHTML = "";
    dogs.forEach(dog => {

      const image = dog.image.split(",");
      imageUrlFromatted = urlFormat(image)[0];
      const singleUserDog = document.createElement('div')
      singleUserDog.classList.add("single-user-dog")
      singleUserDog.innerHTML = `<img src=${imageUrlFromatted} alt="Dog" class="dog-photo">`;
      viewBar.append(singleUserDog)

      const dogUserHeader = document.createElement("div")
      dogUserHeader.classList.add("dog-user-header")
      dogUserHeader.innerHTML=`
      <div id="userDogHeaderContainer">
      <div id="editIcon">
      <i class="fas fa-pen-square fa-2x"></i>
      </div>
      <h1 id="dogNameUserDog">${dog.name}</h1>
      </div>`
      singleUserDog.append(dogUserHeader)

      

      singleUserDog.addEventListener("click", (event) => {
        editDogById(dog.id)
      })


      
    });

  }).catch(err => {
    console.log(err)
  })
}
