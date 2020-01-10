import postData from "./postData"
const onSubmit = async (event) => {
    event.preventDefault()
    const textInput = document.getElementById('textData').value
    const textData = {}
    textData["text"] = textInput
    textInput ?
        postData("http://localhost:8081/sentiment", textData).then(updateUI())
        : alert("Please Enter Text!")
}
const updateUI = async () => {
    const request = await fetch("http://localhost:8081/all")
    try {
        const data = await request.json()
        const { polarity, subjectivity, polarity_confidence, subjectivity_confidence } = data.text
        const polConRound = polarity_confidence.toFixed(2)
        const subConRound = subjectivity_confidence.toFixed(2)
        const pol = document.getElementById("polarity")
        const sub = document.getElementById("subjectivity")
        const polCon = document.getElementById("polarity_confidence")
        const subCon = document.getElementById("subjectivity_confidence")
        pol.innerHTML = `Polarity: ${polarity}.`
        sub.innerHTML = `Subjectivity: ${subjectivity}.`
        polCon.innerHTML = `Polarity confidence: ${polConRound}.`
        subCon.innerHTML = `Subjectivity confidence: ${subConRound}.`
    }
    catch (error) {
        console.log("error", error);
    }
}

export default onSubmit
