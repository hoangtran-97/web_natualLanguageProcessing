import postData from "./postData"
const handleSubmit = async (event) => {
    event.preventDefault()
    const textInput = document.getElementById('textData').value
    const textData = {}
    textData["text"] = textInput
    postData("http://localhost:8081/sentiment", textData)
    const request = await fetch('http://localhost:8081/all');
}


export { handleSubmit }
