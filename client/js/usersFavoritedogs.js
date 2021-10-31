function getFaveDogs() {
    axios.get(`/api/pets/favourites/dogs`).then((res) => {
      console.log(res.data);
      viewBar = document.getElementById("view-bar");
      console.log(viewBar)
      viewBar.classList.remove("view-bar")
      viewBar.classList.add("view-bar-user-dogs")
  
      viewBar.innerHTML = "";
      for (i of res.data) {
        console.log(i);
        image = i["image"].split(",");
        imageUrlFromatted = urlFormat(image)[0];
        div = document.createElement("div");
        div.classList.add("single-user-dog")
        div.innerHTML = `<img src=${imageUrlFromatted} alt="Dog" class="dog-photo">`;
        viewBar.append(div);
  
        div2=document.createElement("div")
        div2.classList.add("dog-user-header")
        div2.innerHTML=`<h1 class="dogName">${i["name"]}</h1`
        div.append(div2)
  
        viewBar.append(div);
      }
    });
  }
  
  function urlFormat(url) {
    const formattedUrl = [];
  
    for (link of url) {
      link = link.replace("}", "").replace("{", "");
      formattedUrl.push(link);
    }
  
    return formattedUrl;
  }
  