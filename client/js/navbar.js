// router.get("/", (req, res) => {
//     // Put this in one of the /api/challenges routes.
//     if (!req.session.username) {
//       // 403 means "forbidden"
//       res.status(403).json({ message: "Not logged in" });
//     } else {
//       res.json({ username: req.session.username });
//     }
//   });

//   router.delete("/", (req, res) => {
//       req.session.destroy();
//       res.json({message: "You have logged out"})
//   });

function createNav() {
  const mainMenu = document.querySelector(".mainMenu");
  console.log(mainMenu);

  

  axios.get(`/api/sessions`)
    .then((response) => {
      mainMenu.innerHTML = "";

      const messages = document.createElement("li");
      messages.textContent = "Messages";
      mainMenu.append(messages);

      const account = document.createElement("li");
      account.textContent = "Account";
      mainMenu.append(account);

      account.addEventListener("click", (e) => {
        close();
        accountForm();
      });
    })
    .catch((err) => {
      mainMenu.innerHTML = "";

      const signUp = document.createElement("li");
      signUp.textContent = "Sign Up";
      mainMenu.append(signUp);

      const login = document.createElement("li");
      login.textContent = "Login";
      mainMenu.append(login);

      const addPet = document.createElement("li");
      addPet.textContent = "Add a Pet";
      mainMenu.append(addPet);

      addPet.addEventListener("click", (e) => {
        close();
        addPetForm();
      });

      signUp.addEventListener("click", (e) => {
        close();
        signUpForm();
      });

      login.addEventListener("click", (e) => {
        close();
        loginForm();
      });
    });
}

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
