const form = document.querySelector('form')

form.onsubmit = async (e) => {
    e.preventDefault();
    const userInput = form.querySelector('[name="user-input"]');
    let result  = "";
    let processed_message = "";
    // fetch('http://localhost:3000/outputs', {
    // })
    // .then(reponse => reponse.json())
    // .then(result => {
    //     console.log(result)
    // })

    // const response = await fetch('http://localhost:3000/0', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         "message": userInput.value
    //     })
    // })

    const response = await fetch('http://localhost:3000/0')

    const outputDiv = document.querySelector('.message');
    const footer  = document.querySelector('.footer');
    userInput.value = "";
    let timestamp = "";
    if (response.ok) {
        result = await response.json()
        try{
            let message = result['outputs'][0]['outputs'][0]['artifacts']['message'];
            timestamp = result['outputs'][0]['outputs'][0]['results']['message']['timestamp'];
            processed_message = message.replaceAll('\n', '<br>')
        }catch{
            console.log(result);
        }
    }else{
        processed_message = "Some Error Occured";
    }

    outputDiv.innerHTML = "";
    outputDiv.innerHTML = processed_message;
    footer.innerHTML = timestamp;

}