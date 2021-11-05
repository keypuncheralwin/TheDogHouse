const mainMenu = document.querySelector(".mainMenu");

const openMenu = document.querySelector(".openMenu");

function createNav() {

  axios.get(`/api/sessions`)
    .then((response) => {
      console.log('user logged in')

      mainMenu.innerHTML = `<div class="closeMenu"><i class="fa fa-times"></i></div>`
      const closeMenu = document.querySelector(".closeMenu");
      console.log(mainMenu)

      const addDog = document.createElement("li");
      addDog.textContent = "Add Listing";
      mainMenu.append(addDog);

      const messages = document.createElement("li");
      messages.textContent = "Messages";
      mainMenu.append(messages);

      const account = document.createElement("li");
      account.textContent = "Account";
      mainMenu.append(account);

      account.addEventListener("click", (e) => {
        close();
        backgroudChanger();
        accountForm();
      });

      messages.addEventListener("click", ()=>{
        close();
        backgroudChanger();
        getAllMessages()
      })

      addDog.addEventListener("click", ()=>{
        close();
        backgroudChanger();
        addPetForm();
      })

      openMenu.addEventListener("click", show);
      closeMenu.addEventListener("click", close);
    
      function show() {
        mainMenu.style.display = "flex";
        mainMenu.style.top = "0";
      }
      
      function close() {
        mainMenu.style.top = "-100%";
      }

      
    })
    .catch((err) => {
      console.log('user not logged in')
  
      mainMenu.innerHTML = `<div class="closeMenu"><i class="fa fa-times"></i></div>`

      const closeMenu = document.querySelector(".closeMenu");
      console.log(mainMenu)


      const signUp = document.createElement("li");
      signUp.textContent = "Sign Up";
      mainMenu.append(signUp);

      const login = document.createElement("li");
      login.textContent = "Login";
      mainMenu.append(login);

      signUp.addEventListener("click", (e) => {
        close();
        backgroudChanger();
        signUpForm();
      });

      login.addEventListener("click", (e) => {
        close();
        backgroudChanger();
        loginForm();
      });


      openMenu.addEventListener("click", show);
      closeMenu.addEventListener("click", close);
    
      function show() {
        mainMenu.style.display = "flex";
        mainMenu.style.top = "0";
      }
      
      function close() {
        mainMenu.style.top = "-100%";
      }
    });

    
   


}



