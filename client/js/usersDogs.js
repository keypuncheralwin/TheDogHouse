// function getUsersDog() {
//   axios.get("api/pets/user/dogs").then((res) => {
//     console.log(res.data);
//     viewBar = document.getElementById("view-bar");
//     console.log(viewBar)
//     viewBar.classList.remove("view-bar")
//     viewBar.classList.add("view-bar-user-dogs")

//     viewBar.innerHTML = "";
//     for (i of res.data) {
//       console.log(i);
//       image = i["image"].split(",");
//       imageUrlFromatted = urlFormat(image)[0];
//       div = document.createElement("div");
//       div.classList.add("single-user-dog")
//       div.innerHTML = `<img src=${imageUrlFromatted} alt="Dog" class="dog-photo">`;
//       viewBar.append(div);

//       div2=document.createElement("div")
//       div2.classList.add("dog-user-header")
//       div2.innerHTML=`<h1 class="dogName">${i["name"]}</h1`
//       div.append(div2)

//       viewBar.append(div);

//       i.addEventListener("click", (event) => {
//         editDogById(i["id"])
//       })

//     }
//   }).catch(err => {
//     console.log(err)
//   })
// }

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
      dogUserHeader.innerHTML=`<h1 class="dogName">${dog.name}</h1`
      singleUserDog.append(dogUserHeader)

      

      singleUserDog.addEventListener("click", (event) => {
        editDogById(dog.id)
      })


      
    });

  }).catch(err => {
    console.log(err)
  })
}
