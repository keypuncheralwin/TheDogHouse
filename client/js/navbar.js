
function createNav(){
    const mainMenu = document.querySelector('.mainMenu')
    console.log(mainMenu)
    
    const signUp = document.createElement('li')
    signUp.textContent = 'Sign Up'
    mainMenu.append(signUp)
    
    const login = document.createElement('li')
    login.textContent = 'Login'
    mainMenu.append(login)
    
    const addPet = document.createElement('li')
    addPet.textContent = 'Add a Pet'
    mainMenu.append(addPet)

    addPet.addEventListener('click', (e) => {
        close()
        addPetForm()
        
        
    })


}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}