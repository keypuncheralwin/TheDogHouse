

function test(){
    axios.get(`/api/sessions`).then((response) => {
        return 'hello'
    }).then((s) => {
        blah()
    })

}