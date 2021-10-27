
function formatDollar(element){
    const elementToFormat = document.getElementById(element)
    const convertToNumber = Number(elementToFormat.value)
    if(Number.isInteger(convertToNumber)){
        elementToFormat.value = symbol + convertToNumber;
    }else{
        elementToFormat.value = ''
    }
}
