const handleSubmit = async (event) => {
    event.preventDefault()
    const textInput = document.getElementById('textData').value
    const textData = {}
    textData["text"] = textInput
    const demo = {
        text: "sdasdasdas",
        number: 123123
    }
    postData("http://localhost:8081/sentiment", textData)
    const request = await fetch('http://localhost:8081/all');
}
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }
