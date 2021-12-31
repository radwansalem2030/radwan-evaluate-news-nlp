function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value
    if(Client.checkUrl(formText)) {
    postForserver('http://localhost:8081/api', {url: formText})

    .then(function(res) {
        document.getElementById('model').innerHTML = `Model:  ${res.model}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('Not valid URL, try again with a valid URL.');
    }
}

const postForserver = async (url = "", data = {}) => {
    console.log('ResultIS:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const dataNew = await response.json();
        console.log('Data From Server:', dataNew)
        return dataNew;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }
