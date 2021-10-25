
function createNav(){
    const navBar = document.getElementById('navBar')
    
    
    const signUp = document.createElement('div')
    signUp.textContent = 'Sign Up'
    signUp.classList.add('navLink')
    navBar.append(signUp)
    
    const login = document.createElement('div')
    login.textContent = 'Login'
    login.classList.add('navLink')
    navBar.append(login)
    
    const addPet = document.createElement('div')
    addPet.textContent = 'Add a Pet'
    addPet.classList.add('navLink')
    navBar.append(addPet)

    addPet.addEventListener('click', (e) => {
        addPetForm()
        
        
    })


}

