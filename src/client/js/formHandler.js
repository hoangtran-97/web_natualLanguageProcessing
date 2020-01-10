const handleSubmit = async (event) => {
    event.preventDefault()
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const request = await fetch('http://localhost:8081/text');
    console.log(request)
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })
}

export { handleSubmit }
