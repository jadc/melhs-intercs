let login = () => {
    let inputs = document.getElementsByTagName("input");
    let fail = document.getElementById("fail");
    if(inputs[0].value == "jad" && inputs[1].value == "123"){
        fail.innerHTML = "Successful login."
    }else{
        let issue = "";
        if(inputs[0].value != "jad") issue = "username";
        if(inputs[1].value != "123") issue = "password";
        if(inputs[0].value != "jad" && inputs[1].value != "123") issue = "username and password"
        
        fail.innerHTML = `Incorrect ${issue}.`;
    }
}