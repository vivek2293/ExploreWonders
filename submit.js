function onSubmit(){
    const emailId = document.getElementById("emailId").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    let info = [];

    const first = document.querySelector('#gridcheckboxs1').checked;
    const second = document.querySelector('#gridcheckboxs2').checked;
    const third = document.querySelector('#gridcheckboxs3').checked;
    const fourth = document.querySelector('#gridCheck1').checked;

    if(first === true){
        info.push("Best informative site for tourism");
    }
    if(second === true){
        info.push("Satisfying and Informative");
    }
    if(third === true){
        info.push("Need much improvement");
    }
    if(fourth === true){
        info.push("Good UI/UX");
    }

    const payload = {
        emailId,
        feedback,
        info
    }

    console.log(payload);
    const url = "http://localhost:3000/feedback";
    const sendInfo = async() => {
        await fetch(url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(() => {alert("Your feedback has been recorded.")})
    }
    sendInfo();
}