function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkUrl(formText)){
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: input_url[0].value})
    })
    //fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('invalid URL, please try with a valid URL.');
    }
}


export { handleSubmit }
