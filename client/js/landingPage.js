

function landingPage(){

    content.classList.add('landingBackgroud')

    const container = document.getElementById('container')
    container.innerHTML = `

    <div id="landingContainer">
    <div id="landingHeader"> 
    <div id="landingTitle">Anything is <em>Paw-Sible</em> with a dog!</div>
    <div id="landingTextContainer">
    <div class="landingText">Here at The Dog House we make it our mission to help dogs of all kinds to find a loving home.
    We aim to help make a difference to the Australian dog rescue community and thousands of dogs in need of a home</div>
    <div id="landingViewDogs">
    <div id="browse">Browse our doggos</div>
    <div id="browseIcon"><i class="fas fa-arrow-right"></i></div>
    </div>
    </div>
    </div>
    </div>
    `

    const viewDogsButton = document.getElementById('landingViewDogs')

    viewDogsButton.addEventListener('click', e => {

        backgroudChanger()
        viewAllDogs()

    })




}

function logoButton(){

    const logo = document.getElementById('logo')

    logo.addEventListener('click', e =>{

        backgroudChanger()
        viewAllDogs()

    })
}

function backgroudChanger(){

    const content = document.getElementById('content')

    content.classList.remove('landingBackgroud')
    content.classList.remove('regularBackground')
    content.classList.add('regularBackground')
}